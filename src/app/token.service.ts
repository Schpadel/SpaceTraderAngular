import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {Faction, UserResponse, User, FactionResponse} from "./API";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private registerURL = "https://api.spacetraders.io/v2/register";
  private agentURL: string = "https://api.spacetraders.io/v2/my/agent";
  private user: User | undefined;
  private token: string = "";
  private factionURL: string = "https://api.spacetraders.io/v2/factions";

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

  getAuthHeader() {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    };
  }

  loginWithToken(token: string): Observable<User> {
    this.token = token;
    localStorage.setItem("token", token);



    return this.http.get<UserResponse>(this.agentURL, this.getAuthHeader()).pipe(map(value => value.data));

    }

  getUser(): Observable<User> {
    let loadedToken = localStorage.getItem("token");
    if(loadedToken) {

      return this.loginWithToken(loadedToken);
    }
    return of();
  }

  getFactions(): Observable<Faction[]> {
    return this.http.get<FactionResponse>(this.factionURL, this.getAuthHeader()).pipe(map(value => value.data))
  }
}

