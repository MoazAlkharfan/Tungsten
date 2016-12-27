import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//Pages
import { HomePage } from './pages/home/homepage.component';
import { Dashboard_Index } from './dashboard.component';
import { GroupsPage } from './pages/groups/groups.component';
import { GroupPage } from './pages/group/group.component';
import { CreateGroup } from './pages/creategroup/creategroup.component';
import { CreateCourse } from './pages/createcourse/createcourse.component';

// Routing Guards
import { isAuthenticatedGuard } from '../../services/guards/isAuthenticated';

const routes: Routes = [
    {
        path: 'dashboard', component: Dashboard_Index, canActivateChild: [isAuthenticatedGuard],
        children:
        [
            { path: '', component: HomePage, outlet: 'dashboard' }, // base url
            { path: 'groups', component: GroupsPage, outlet: 'dashboard' },
            { path: 'group/:id', component: GroupPage, outlet: 'dashboard' },
            { path: 'creategroup', component: CreateGroup, outlet: 'dashboard' },
            { path: 'createcourse/:groupid', component: CreateCourse, outlet: 'dashboard' }
        ]
    }
];

export const DASHBOARD_Routes: ModuleWithProviders = RouterModule.forChild(routes);