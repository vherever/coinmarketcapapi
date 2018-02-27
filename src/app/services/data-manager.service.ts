import { Injectable } from '@angular/core';
import {AjaxService} from './ajax.service';

@Injectable()
export class DataManagerService {

  constructor(
    private ajaxService: AjaxService
  ) { }

  importData() {
      return this.ajaxService
          .get('/import')
          .then(res => res);
  }

  getCoinsDataAPI() {
    return this.ajaxService
      .get('/api/getCoinsDataAPI')
      .then(res => res);
  }

  postCoinsDataDB(data) {
    return this.ajaxService
      .post('/coins', {data: data});
  }

  getCoinsDataDB() {
    return this.ajaxService
      .get('/coins')
      .then(res => res);
  }

  removeNoteById(id: any) {
      return this.ajaxService
          .delete('/coins/' + id)
          .then(res => res);
  }

  removeAll() {
    return this.ajaxService
      .delete('/deleteAll')
      .then(res => res);
  }

}
