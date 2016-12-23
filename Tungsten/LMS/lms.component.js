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
var GroupService_1 = require("./services/GroupService");
var membership_service_1 = require("./services/membership.service");
var IndexPage = (function () {
    function IndexPage(elementRef, membershipService) {
        this.elementRef = elementRef;
        this.membershipService = membershipService;
        this.isuserloggedin = this.elementRef.nativeElement.getAttribute('isloggedin');
    }
    IndexPage.prototype.isUserLoggedIn = function () {
        return this.membershipService.isUserAuthenticated();
    };
    IndexPage.prototype.getUserName = function () {
        if (this.isUserLoggedIn()) {
            var _user = this.membershipService.getLoggedInUser();
            return _user.Username;
        }
        else
            return 'Account';
    };
    IndexPage.prototype.logout = function () {
        this.membershipService.logout()
            .subscribe(function (res) {
            localStorage.removeItem('user');
        }, function (error) { return console.error('Error: ' + error); }, function () { });
    };
    //console.log(this.isuserloggedin);
    IndexPage.prototype.ngOnInit = function () {
        console.log('Loggedin:');
        console.log(this.isuserloggedin);
    };
    return IndexPage;
}());
__decorate([
    core_1.Input()
], IndexPage.prototype, "username", void 0);
IndexPage = __decorate([
    core_1.Component({
        selector: 'lms-index',
        templateUrl: './LMS/index.html',
        styleUrls: ['./LMS/index.css'],
        providers: [GroupService_1.GroupService]
    }),
    __param(0, core_1.Inject(core_1.ElementRef)), __param(1, core_1.Inject(membership_service_1.MembershipService))
], IndexPage);
exports.IndexPage = IndexPage;
//# sourceMappingURL=lms.component.js.map