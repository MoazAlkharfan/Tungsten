"use strict";
var router_1 = require('@angular/router');
var lms_component_1 = require('./lms.component');
exports.routes = [
    { path: '', component: lms_component_1.HomePage }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRoutes(exports.routes)
];
//# sourceMappingURL=lms.js.map