import { Component, OnInit } from '@angular/core';
import {DataManagerService} from '../services/data-manager.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
  coinsData: any;
  log: any;

  constructor(
    private dmService: DataManagerService
  ) {
    this.log = {
      getCoinsDataAPI: false,
      postCoinsDataDB: false,
      getCoinsDataDB: false
    };
  }

  ngOnInit() {}

  /* Get latest information from CoinMarketCap */
  getCoinsDataAPI() {
    this.log.getCoinsDataAPI = true;
    this.dmService.getCoinsDataAPI()
      .then(
        res => {
          this.log.getCoinsDataAPI = false;
          this.postCoinsDataDB(res.data);
        }
      );
  }

  /* Store information from CoinMarketCap in DB */
  private postCoinsDataDB(data) {
    this.log.postCoinsDataDB = true;
    this.dmService.postCoinsDataDB(data)
      .then(
        () => {
          this.log.postCoinsDataDB = false;
          this.getCoinsDataDB();
        }
      );
  }

  /* Get information from DB */
  private getCoinsDataDB() {
    this.log.getCoinsDataDB = true;
    this.dmService.getCoinsDataDB()
      .then(
        res => {
          this.log.getCoinsDataDB = false;
          console.log('res', res);
          this.coinsData = res;
        }
      );
  }

}
