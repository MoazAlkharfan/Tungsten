import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Pages
import { IndexPage } from './lms.component';
import { AccountPage } from './account/AccountPage.component';
import { HomePage } from './home/HomePage.component';
import { RegisterPage } from './register/register.component';

const routes: Routes = [
    { path: 'register', component: RegisterPage },
    { path: 'account', component: AccountPage },
    { path: '', component: HomePage }, // / base url
    { path: '**', redirectTo: '', pathMatch: 'full' } // not found
];

export const LMS_Routes: ModuleWithProviders = RouterModule.forRoot(routes);