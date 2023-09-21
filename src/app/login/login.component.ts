import { Component } from '@angular/core';
import {TokenService} from "../token.service";
import {User} from "../API";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  token: string = "";
  user: User | undefined;
  constructor(public tokenService: TokenService) {
  }
  getToken(symbol: string, faction: string): void {
    this.tokenService.getToken(symbol, faction).subscribe(value => this.token = value);
  }

  loginWithToken(token: string) {
    this.tokenService.loginWithToken(token).subscribe(value => this.user = value);
  }
}
