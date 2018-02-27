import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {AppConfig} from './app/app.config';

if (environment.production) {
  enableProdMode();
}



const config: AppConfig;

if (environment.config) {
  config = new AppConfig(environment.config);
}

if (config) {
  setTimeout(() => {
    platformBrowserDynamic([
      {provide: AppConfig, useValue: config}
    ]).bootstrapModule(AppModule)
      .catch(err => console.log(err));
  }, 1000);
} else {
  console.log('The configuration data was not found.');
}
