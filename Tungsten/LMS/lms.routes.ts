import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Pages
import { IndexPage } from './lms.component';
import { AccountPage } from './pages/account/AccountPage.component';
import { HomePage } from './pages/home/HomePage.component';
import { RegisterPage } from './pages/register/register.component';
import { Dashboard_Index } from './pages/dashboard/dashboard.component';

// Routing Guards
import { isAuthenticatedGuard } from './services/guards/isAuthenticated';
import { Dashboard } from './pages/dashboard/dashboard.module';

export const routes: Routes = [
    { path: 'dashboard', component: Dashboard, loadChildren: 'lms/pages/dashboard/dashboard.module#Dashboard' },
    { path: 'register', component: RegisterPage },
    { path: 'accountpage', component: AccountPage, canActivate: [isAuthenticatedGuard] },
    { path: '', component: HomePage }, // / base url
    { path: '**', redirectTo: '', pathMatch: 'full' } // not found
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class RoutingModule { }
