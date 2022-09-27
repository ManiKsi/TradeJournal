import { Trade } from '../models/trade.model';

export class TradesService {
  private test!: Trade[];
  Trades: Trade[] = [];
  constructor() {
    this.test = [
      {
        date: new Date(),
        stockName: 'CCL',
        tradeType: 'Short',
        sellPrice: 200,
        buyPrice: 200,
        qty: 2000,
        sellMargin: 20000,
        buyMargin: 20000,
        grossPl: 2044,
        brokerage: 40,
        charges: 232,
        netPl: 435,
        notes: 'this is a note',
      },
      {
        date: new Date(),
        stockName: 'CCL',
        tradeType: 'Short',
        sellPrice: 200,
        buyPrice: 200,
        qty: 2000,
        sellMargin: 20000,
        buyMargin: 20000,
        grossPl: 2044,
        brokerage: 40,
        charges: 232,
        netPl: 435,
        notes: 'this is a note2',
      },
    ];
    this.Trades = this.test;
  }

  getTrades() {
    return this.Trades;
  }
}
