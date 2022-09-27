import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
@Injectable()
export class FundsService {
  initialBalance: number = 0;
  presentBalance: number = 0;
  monthGrowth: number = 0;
  lastMonthBalance: number = 0;
  allTimeGrowth: number = 0;
  allTimeGrowthBal: number;
  projectedBalanceThisMonth: number = 0;
  projectedBalanceNextMonth: number = 0;

  constructor(private databaseService: DatabaseService) {
    this.initialBalance = databaseService.initialBalance;
    this.presentBalance = databaseService.presentBalance;
    this.allTimeGrowthBal = this.presentBalance - this.initialBalance;
    this.allTimeGrowth =
      ((this.presentBalance - this.initialBalance) / this.initialBalance) * 100;
  }
  getFundsOnLoad() {
    return {
      presentBalance: this.presentBalance,
      allTimeGrowth: this.allTimeGrowth,
      allTimeGrowthBal: this.allTimeGrowthBal,
    };
  }
}
