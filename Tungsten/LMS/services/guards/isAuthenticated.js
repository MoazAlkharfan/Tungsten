"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var membership_service_1 = require('../membership.service');
var isAuthenticatedGuard = (function () {
    function isAuthenticatedGuard(_membershipService, router) {
        this._membershipService = _membershipService;
        this.router = router;
    }
    isAuthenticatedGuard.prototype.canActivateChild = function () {
        if (this._membershipService.isUserAuthenticated()) {
            return true;
        }
        else {
            this.router.navigateByUrl('');
            return false;
        }
    };
    isAuthenticatedGuard.prototype.canActivate = function () {
        if (this._membershipService.isUserAuthenticated()) {
            return true;
        }
        else {
            this.router.navigateByUrl('');
            return false;
        }
    };
    isAuthenticatedGuard = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(membership_service_1.MembershipService)),
        __param(1, core_1.Inject(router_1.Router))
    ], isAuthenticatedGuard);
    return isAuthenticatedGuard;
}());
exports.isAuthenticatedGuard = isAuthenticatedGuard;
//# sourceMappingURL=isAuthenticated.js.map