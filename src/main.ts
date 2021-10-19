import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Defininig Cesium base URL
// @ts-ignore 
window.CESIUM_BASE_URL = '/assets/cesium/';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

