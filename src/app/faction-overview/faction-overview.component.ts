import {Component, OnInit} from '@angular/core';
import {TokenService} from "../token.service";
import {Faction} from "../API";

@Component({
  selector: 'app-faction-overview',
  templateUrl: './faction-overview.component.html',
  styleUrls: ['./faction-overview.component.css']
})
export class FactionOverviewComponent implements OnInit {
  constructor(private tokenService: TokenService) {
  }
  public factionList: Faction[] = [];
  getFaction() {
    this.tokenService.getFactions().subscribe(value => this.factionList = value);
  }

  ngOnInit(): void {
    this.getFaction();
  }


}
