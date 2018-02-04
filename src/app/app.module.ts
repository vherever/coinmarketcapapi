import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import {AjaxService} from './services/ajax.service';
import {DataManagerService} from './services/data-manager.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CoinListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    AjaxService,
    DataManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
