import { Component } from '@angular/core';
import {TokenService} from "../token.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  token: string = "";

  constructor(public tokenService: TokenService) {
  }
  getToken(symbol: string, faction: string): void {
    this.tokenService.getToken(symbol, faction).subscribe(value => this.token = value);
  }
}
