import { Component, OnInit } from '@angular/core';
import {DataManagerService} from '../services/data-manager.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
  coinsDataSnapshoots: any;
  lastUpdatedCoinsData: any;
  log: any;

  constructor(
    private dmService: DataManagerService
  ) {
    this.log = {
      getCoinsDataAPI:  false,
      postCoinsDataDB:  false,
      getCoinsDataDB:   false,
      deleteData:       false
    };
  }

  ngOnInit() {}

  getCoinsData() {
      this.getCoinsDataAPI();
  }

  /* Get latest information from CoinMarketCap */
  private getCoinsDataAPI() {
    this.log.getCoinsDataAPI = true;
    this.dmService.getCoinsDataAPI()
      .then(
        res => {
          this.log.getCoinsDataAPI = false;
          this.postCoinsDataDB(res.data);
        }
      );
  }

  private importHardcodedData() {
    this.log.postCoinsDataDB = true;
      this.dmService.importData()
          .then(
              () => {
                this.log.postCoinsDataDB = false;
                  this.getCoinsDataDB();
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
          if (res.length > 3) {
            this.removeNoteById(res[0]._id);
            res.shift();
          }
          this.coinsDataSnapshoots = res;
          this.lastUpdatedCoinsData = this.coinsDataSnapshoots[this.coinsDataSnapshoots.length - 1].data;
          console.log('coinsDataSnapshoots', this.coinsDataSnapshoots);
        }
      );
  }

  /* Clear item from DB by id */
  private removeNoteById(id?: any) {
    this.dmService.removeNoteById(id)
      .then();
  }

  clearAllData() {
    this.log.deleteData = true;
    this.dmService.removeAll()
      .then(
        () => {
          this.log.deleteData = false;
          this.coinsDataSnapshoots = [];
          this.lastUpdatedCoinsData = [];
          console.log('coinsDataSnapshoots', this.coinsDataSnapshoots);
        }
      );
  }

}
