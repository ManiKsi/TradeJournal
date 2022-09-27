import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Trade } from '../models/trade.model';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-newtrade',
  templateUrl: './newtrade.component.html',
  styleUrls: ['./newtrade.component.css'],
})
export class NewtradeComponent implements OnInit {
  date = '';
  data = {
    date: new Date(this.date),
    stockName: '',
    tradeType: '',
    sellPrice: 0,
    buyPrice: 0,
    qty: 0,
    orders: 0,
    notes: '',
  };
  public trade!: Trade;

  constructor(
    private dataService: DatabaseService,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {}
  onFormChange() {
    this.trade = {
      date: this.data.date,
      stockName: this.data.stockName,
      tradeType: this.data.tradeType,
      sellPrice: this.data.sellPrice,
      buyPrice: this.data.buyPrice,
      qty: this.data.qty,
      sellMargin: this.data.sellPrice * this.data.qty,
      buyMargin: this.data.buyPrice * this.data.qty,
      grossPl:
        this.data.sellPrice * this.data.qty -
        this.data.buyPrice * this.data.qty,
      brokerage: this.data.orders * 20,
      charges: 0,
      netPl:
        this.data.sellPrice * this.data.qty -
        this.data.buyPrice * this.data.qty -
        this.data.orders * 20,
      notes: this.data.notes,
    };
  }
  onFormSubmit() {
    const uid = JSON.parse(localStorage.getItem('user') || '').uid;
    this.dataService.onLogin(uid);
    let trades: Trade[] =
      'trades' in this.dataService.userData
        ? this.dataService.userData.trades
        : [];
    trades.push(this.trade);
    console.log(trades);
    this.firestore.collection('usersData').add({ trades: trades });
  }
}
