"use strict";
var router_1 = require("@angular/router");
var AccountPage_component_1 = require("./account/AccountPage.component");
var HomePage_component_1 = require("./home/HomePage.component");
var register_component_1 = require("./register/register.component");
var routes = [
    { path: 'register', component: register_component_1.RegisterPage },
    { path: 'account', component: AccountPage_component_1.AccountPage },
    { path: '', component: HomePage_component_1.HomePage },
    { path: '**', redirectTo: '', pathMatch: 'full' } // not found
];
exports.LMS_Routes = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=lms.routes.js.map