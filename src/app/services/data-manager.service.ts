import { Injectable } from '@angular/core';
import {AjaxService} from './ajax.service';

@Injectable()
export class DataManagerService {

  constructor(
    private ajaxService: AjaxService
  ) { }

  getCoins() {
    return this.ajaxService
      .get('/api/getData')
      .then(
        res => {
          return res;
        }
      );
  }

}
