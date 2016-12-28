"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
require('rxjs/Rx');
// Routes
var lms_routes_1 = require('./lms.routes');
// Services
var GroupService_1 = require('./services/GroupService');
var data_service_1 = require('./services/data.service');
var membership_service_1 = require('./services/membership.service');
// Components
var GroupsList_1 = require('./components/GroupsList/GroupsList');
var Login_1 = require('./components/Login/Login');
// Pages
var lms_component_1 = require('./lms.component');
var AccountPage_component_1 = require('./pages/account/AccountPage.component');
var HomePage_component_1 = require('./pages/home/HomePage.component');
var register_component_1 = require('./pages/register/register.component');
var dashboard_module_1 = require('./pages/dashboard/dashboard.module');
// directives
var autofocus_1 = require('./directives/autofocus');
// Routing Guards
var isAuthenticated_1 = require('./services/guards/isAuthenticated');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                lms_routes_1.LMS_Routes,
                dashboard_module_1.Dashboard
            ],
            declarations: [
                lms_component_1.IndexPage,
                HomePage_component_1.HomePage,
                AccountPage_component_1.AccountPage,
                register_component_1.RegisterPage,
                GroupsList_1.GroupsList,
                Login_1.Login,
                autofocus_1.Autofocus
            ],
            bootstrap: [lms_component_1.IndexPage],
            providers: [GroupService_1.GroupService, data_service_1.DataService, membership_service_1.MembershipService, isAuthenticated_1.isAuthenticatedGuard]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=lms.module.js.map