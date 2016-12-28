"use strict";
var router_1 = require('@angular/router');
var AccountPage_component_1 = require('./pages/account/AccountPage.component');
var HomePage_component_1 = require('./pages/home/HomePage.component');
var register_component_1 = require('./pages/register/register.component');
var dashboard_component_1 = require('./pages/dashboard/dashboard.component');
// Routing Guards
var isAuthenticated_1 = require('./services/guards/isAuthenticated');
var routes = [
    { path: 'dashboard', component: dashboard_component_1.Dashboard_Index, canActivate: [isAuthenticated_1.isAuthenticatedGuard] },
    { path: 'register', component: register_component_1.RegisterPage },
    { path: 'account', component: AccountPage_component_1.AccountPage, canActivate: [isAuthenticated_1.isAuthenticatedGuard] },
    { path: '', component: HomePage_component_1.HomePage },
    { path: '**', redirectTo: '', pathMatch: 'full' } // not found
];
exports.LMS_Routes = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=lms.routes.js.map