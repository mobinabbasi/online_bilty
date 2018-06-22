import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
const data = JSON.parse(localStorage.getItem('Data'));
console.log(data);
//localStorage.clear();