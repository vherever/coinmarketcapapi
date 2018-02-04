import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AjaxService {

  constructor(
    private http: HttpClient
  ) { }

  post(url: string, data: any): Promise<any> {
    return this.http
      .post(url, data)
      .toPromise()
      .then(res => res);
  }

  get(url: string): Promise<any> {
    return this.http
      .get(url)
      .toPromise()
      .then(res => res);
  }
}
