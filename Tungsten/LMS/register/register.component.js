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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var registration_1 = require("../classes/registration");
var operationResult_1 = require("../classes//operationResult");
var membership_service_1 = require("../services/membership.service");
var RegisterPage = (function () {
    function RegisterPage(membershipService, router) {
        this.membershipService = membershipService;
        this.router = router;
    }
    RegisterPage.prototype.ngOnInit = function () {
        this._newUser = new registration_1.Registration('', '', '');
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        var _registrationResult = new operationResult_1.OperationResult(false, '');
        this.membershipService.register(this._newUser)
            .subscribe(function (res) {
            _registrationResult.Succeeded = res.Succeeded;
            _registrationResult.Message = res.Message;
        }, function (error) { return console.error('Error: ' + error); }, function () {
            if (_registrationResult.Succeeded) {
                _this.router.navigate(['account/login']);
            }
            else {
            }
        });
    };
    ;
    return RegisterPage;
}());
RegisterPage = __decorate([
    core_1.Component({
        selector: 'register',
        providers: [membership_service_1.MembershipService],
        templateUrl: './lms/register/RegisterPage.html'
    }),
    __param(0, core_1.Inject(membership_service_1.MembershipService)),
    __param(1, core_1.Inject(router_1.Router))
], RegisterPage);
exports.RegisterPage = RegisterPage;
//# sourceMappingURL=register.component.js.map