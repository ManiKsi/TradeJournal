import { Component, Input, OnInit } from '@angular/core';
import { Trade } from 'src/app/models/trade.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() trade!: Trade;
  @Input() preview: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
