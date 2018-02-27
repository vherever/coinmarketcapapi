import { Injectable } from '@angular/core';
import {AjaxService} from './ajax.service';
import {AppConfig} from '../app.config';

@Injectable()
export class DataManagerService {

  constructor(
    private ajaxService: AjaxService,
    private config: AppConfig
  ) { }

  importData() {
      return this.ajaxService
          .get(this.config.importCoinsDataUrl)
          .then(res => res);
  }

  getCoinsDataAPI() {
    return this.ajaxService
      .get(this.config.getCoinsDataAPIUrl)
      .then(res => res);
  }

  postCoinsDataDB(data) {
    return this.ajaxService
      .post(this.config.postCoinsDataDBUrl, {data: data});
  }

  getCoinsDataDB() {
    return this.ajaxService
      .get(this.config.getCoinsDataDBUrl)
      .then(res => res);
  }

  removeNoteById(id: any) {
      return this.ajaxService
          .delete(this.config.removeCoinDataByIdUrl + id)
          .then(res => res);
  }

  removeAll() {
    return this.ajaxService
      .delete(this.config.removeAllCoinsDataUrl)
      .then(res => res);
  }

}
