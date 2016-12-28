"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
// routes
var dashboard_routes_1 = require('./dashboard.routes');
// pages
var dashboard_component_1 = require('./dashboard.component');
var homepage_component_1 = require('./pages/home/homepage.component');
var groups_component_1 = require('./pages/groups/groups.component');
// components
var GroupsList_1 = require('../../components/groupslist/GroupsList');
var Dashboard = (function () {
    function Dashboard() {
    }
    Dashboard = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                dashboard_routes_1.DASHBOARD_Routes
            ],
            declarations: [
                dashboard_component_1.Dashboard_Index,
                homepage_component_1.HomePage,
                groups_component_1.GroupsPage,
                GroupsList_1.GroupsList
            ],
            providers: []
        })
    ], Dashboard);
    return Dashboard;
}());
exports.Dashboard = Dashboard;
//# sourceMappingURL=dashboard.module.js.map