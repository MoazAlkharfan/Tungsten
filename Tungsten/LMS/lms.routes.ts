import { provideRoutes, Routes } from '@angular/router';
import { IndexPage } from './lms.component';
import { HomePage } from './home/HomePage.component';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: '**', redirectTo: '', pathMatch: 'full' },
    { path: '/1', component: HomePage},
    { path: 'index', component: HomePage},
    { path: 'account', component: HomePage}
];

export const APP_ROUTER_PROVIDERS = [
    provideRoutes(routes)
];