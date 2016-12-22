import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './lms.module';
import { APP_ROUTER_PROVIDERS } from './lms.routes';

platformBrowserDynamic().bootstrapModule(AppModule);