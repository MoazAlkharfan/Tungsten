"use strict";
var router_1 = require('@angular/router');
var HomePage_component_1 = require('./home/HomePage.component');
exports.routes = [
    { path: '', component: HomePage_component_1.HomePage },
    { path: '**', redirectTo: '', pathMatch: 'full' },
    { path: '/1', component: HomePage_component_1.HomePage },
    { path: 'index', component: HomePage_component_1.HomePage },
    { path: 'account', component: HomePage_component_1.HomePage }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRoutes(exports.routes)
];
//# sourceMappingURL=lms.routes.js.map