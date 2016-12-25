import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomePage } from './pages/home/homepage.component';
import { Dashboard_Index } from './dashboard.component';

const routes: Routes = [
    {
        path: 'dashboard', component: Dashboard_Index,
        children:
        [
            { path: '', component: HomePage, outlet: 'dashboard' } // base url
        ]
    },
];

export const DASHBOARD_Routes: ModuleWithProviders = RouterModule.forChild(routes);