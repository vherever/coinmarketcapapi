import { Injectable } from '@angular/core';
import {AjaxService} from './ajax.service';

@Injectable()
export class DataManagerService {

  constructor(
    private ajaxService: AjaxService
  ) { }

  getCoinsDataAPI() {
    return this.ajaxService
      .get('/api/getCoinsDataAPI')
      .then(
        res => {
          return res;
        }
      );
  }

  postCoinsDataDB(data) {
    return this.ajaxService
      .post('/api/postCoinsDataDB', data);
  }

  getCoinsDataDB() {
    return this.ajaxService
      .get('/api/getCoinsDataDB')
      .then(
        res => {
          return res;
        }
      );
  }

}
