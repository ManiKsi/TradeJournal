import { Component, OnInit } from '@angular/core';
import { Trade } from '../models/trade.model';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  trades: Trade[] = [];

  constructor(private dataService: DatabaseService) {}

  ngOnInit(): void {
    const uid = JSON.parse(localStorage.getItem('user') || '').uid;
    this.dataService.onLogin(uid);
    console.log(this.dataService.userData);
    this.trades = this.dataService.userData.trades;
  }
}
