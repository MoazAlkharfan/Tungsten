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
var router_1 = require('@angular/router');
// Pages
var lms_component_1 = require('./lms.component');
var lms_component_2 = require('./account/lms.component');
var HomePage_component_1 = require('./home/HomePage.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'account', component: lms_component_2.AccountPage },
                    { path: '', component: HomePage_component_1.HomePage },
                    { path: '**', redirectTo: '', pathMatch: 'full' } // not found
                ])
            ],
            declarations: [
                lms_component_1.IndexPage,
                HomePage_component_1.HomePage,
                lms_component_2.AccountPage
            ],
            bootstrap: [lms_component_1.IndexPage]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=lms.module.js.map