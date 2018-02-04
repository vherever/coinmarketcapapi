import { Component, OnInit } from '@angular/core';
import {DataManagerService} from '../services/data-manager.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
  coinsData: any;

  constructor(
    private dmService: DataManagerService
  ) { }

  ngOnInit() {}

  getAllCoinsData() {
    this.dmService.getCoins()
      .then(
        res => {
          console.log('res', res);
          this.coinsData = res.data;
        }
      );
  }

}
