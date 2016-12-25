import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomePage } from './pages/home/homepage.component';
import { Dashboard_Index } from './dashboard.component';

// Routing Guards
import { isAuthenticatedGuard } from '../../services/guards/isAuthenticated';

const routes: Routes = [
    {
        path: 'dashboard', component: Dashboard_Index, canActivateChild: [isAuthenticatedGuard],
        children:
        [
            { path: '', component: HomePage, outlet: 'dashboard' } // base url
        ]
    },
];

export const DASHBOARD_Routes: ModuleWithProviders = RouterModule.forChild(routes);