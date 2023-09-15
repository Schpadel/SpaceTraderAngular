import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private registerURL = "https://api.spacetraders.io/v2/register";


  constructor(private http: HttpClient) {
  }

  getToken(symbol: string, faction: string): Observable<string> {
    symbol = symbol.trim();
    faction = faction.trim();

    const header = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }}

    const body = {symbol: symbol, faction: "COSMIC"};

    if (symbol == "") {
      return of("invalid symbol");
    }
    if (faction == "") {
      return of("invalid faction");
    }


    return this.http.post<any>(this.registerURL, body, header).pipe(map(value => value.data["token"]));

  }
}
