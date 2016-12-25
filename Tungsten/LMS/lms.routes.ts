import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Pages
import { IndexPage } from './lms.component';
import { AccountPage } from './pages/account/AccountPage.component';
import { HomePage } from './pages/home/HomePage.component';
import { RegisterPage } from './pages/register/register.component';
import { Dashboard_Index } from './pages/dashboard/dashboard.component';

// Routing Guards
import { isAuthenticatedGuard } from './services/guards/isAuthenticated';


const routes: Routes = [
    { path: 'dashboard', component: Dashboard_Index, canActivate: [isAuthenticatedGuard] },
    { path: 'register', component: RegisterPage },
    { path: 'account', component: AccountPage, canActivate: [isAuthenticatedGuard] },
    { path: '', component: HomePage }, // / base url
    { path: '**', redirectTo: '', pathMatch: 'full' } // not found
];

export const LMS_Routes: ModuleWithProviders = RouterModule.forRoot(routes);