import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { FundsService } from '../services/funds.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css'],
})
export class FundsComponent implements OnInit {
  availableBal: number = 0;
  allTimeGrowth: number = 0;
  allTimeGrowthBal: number = 0;
  mainBalChange: number = 0;
  mainBalChangeAmount: number = 0;
  constructor(
    private fundsService: FundsService,
    private databaseService: DatabaseService
  ) {}

  ngOnInit(): void {
    this.availableBal = this.fundsService.getFundsOnLoad().presentBalance;
    this.allTimeGrowth = this.fundsService.getFundsOnLoad().allTimeGrowth;
    this.allTimeGrowthBal = this.fundsService.getFundsOnLoad().allTimeGrowthBal;
  }
  onThisTermBal() {
    console.log(this.databaseService.thisTermBalance);
    this.mainBalChangeAmount =
      this.databaseService.presentBalance -
      this.databaseService.thisTermBalance;
  }
}
