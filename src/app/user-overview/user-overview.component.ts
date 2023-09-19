import {Component, OnInit} from '@angular/core';
import {TokenService} from "../token.service";
import {User} from "../User";

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {
  user: User | undefined;
    constructor(public tokenService: TokenService) {
}

  ngOnInit(): void {
      this.tokenService.getUser().subscribe(value => this.user = value);
  }


}
