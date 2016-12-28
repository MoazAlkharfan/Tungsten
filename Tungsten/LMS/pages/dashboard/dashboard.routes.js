"use strict";
var router_1 = require('@angular/router');
//Pages
var homepage_component_1 = require('./pages/home/homepage.component');
var dashboard_component_1 = require('./dashboard.component');
var groups_component_1 = require('./pages/groups/groups.component');
// Routing Guards
var isAuthenticated_1 = require('../../services/guards/isAuthenticated');
var routes = [
    {
        path: 'dashboard', component: dashboard_component_1.Dashboard_Index, canActivateChild: [isAuthenticated_1.isAuthenticatedGuard],
        children: [
            { path: '', component: homepage_component_1.HomePage, outlet: 'dashboard' },
            { path: 'groups', component: groups_component_1.GroupsPage, outlet: 'dashboard' },
        ]
    },
];
exports.DASHBOARD_Routes = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=dashboard.routes.js.map