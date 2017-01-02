import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './lms.module';
import { UserAnnouncer } from './services/UserAnnouncer';

platformBrowserDynamic().bootstrapModule(AppModule, [{ providers: [UserAnnouncer] }]);