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
var data_service_1 = require('./data.service');
var MembershipService = (function () {
    function MembershipService(accountService) {
        this.accountService = accountService;
        this._accountRegisterAPI = '/Account/Register/';
        this._accountLoginAPI = '/Account/Login/';
        this._accountLogoutAPI = '/Account/LogOff/';
        this._accountUserInfo = '/Account/GetUserInfo/';
    }
    MembershipService.prototype.register = function (newUser) {
        this.accountService.set(this._accountRegisterAPI);
        return this.accountService.post(newUser);
    };
    MembershipService.prototype.login = function (creds) {
        this.accountService.set(this._accountLoginAPI);
        return this.accountService.post(creds);
    };
    MembershipService.prototype.logout = function () {
        this.accountService.set(this._accountLogoutAPI);
        return this.accountService.post(null);
    };
    MembershipService.prototype.isUserAuthenticated = function () {
        var _user = localStorage.getItem('user');
        if (_user != null)
            return true;
        else
            return false;
    };
    MembershipService.prototype.getLoggedInUser = function () {
        var _user;
        if (this.isUserAuthenticated()) {
            var _userData = JSON.parse(localStorage.getItem('user'));
            _user = _userData;
        }
        return _user;
    };
    MembershipService.prototype.getUserInfo = function (_user) {
        this.accountService.set(this._accountUserInfo);
        return this.accountService.post(_user);
    };
    MembershipService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(data_service_1.DataService))
    ], MembershipService);
    return MembershipService;
}());
exports.MembershipService = MembershipService;
//# sourceMappingURL=membership.service.js.map