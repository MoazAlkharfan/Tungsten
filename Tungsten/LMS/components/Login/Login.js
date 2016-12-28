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
var User_1 = require('../../classes/User');
var operationResult_1 = require('../../classes/operationResult');
var membership_service_1 = require('../../services/membership.service');
var Inputter = (function () {
    function Inputter(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    Inputter.prototype.focus = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus', []);
    };
    Inputter = __decorate([
        core_1.Directive({
            selector: 'input[type=text][focusonload=true]'
        }),
        __param(0, core_1.Inject(core_1.Renderer)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], Inputter);
    return Inputter;
}());
var Login = (function () {
    function Login(membershipService, 
        //public notificationService: NotificationService,
        router) {
        this.membershipService = membershipService;
        this.router = router;
        this.userUpdated = new core_1.EventEmitter();
    }
    Login.prototype.ngOnInit = function () {
        this._user = new User_1.User('', '', '', '', []);
        this.LoggedIn = this.membershipService.isUserAuthenticated();
    };
    Login.prototype.eventHandler = function (key) {
        console.log(key);
    };
    Login.prototype.OpenPanel = function () {
        this.LoginPanelIsOpen = true;
        //this.usernameInput.focus();
        //this._elements.nativeElement.focus();
    };
    Login.prototype.StopHidingPanel = function () {
        clearTimeout(this.Timeout);
    };
    Login.prototype.ClosePanel = function () {
        var _this = this;
        this.Timeout = setTimeout(function () {
            _this.LoginPanelIsOpen = false;
        }, 1000);
    };
    Login.prototype.login = function () {
        var _this = this;
        var _authenticationResult = new operationResult_1.OperationResult(false, '');
        this.membershipService.login(this._user)
            .subscribe(function (res) {
            _authenticationResult = res;
        }, function (error) { return console.error('Error: ' + error); }, function () {
            if (_authenticationResult.Succeeded) {
                _this.membershipService.getUserInfo(_this._user)
                    .subscribe(function (ress) {
                    _this._user = ress;
                }, function (error) { return console.error('Error: ' + error); }, function () {
                    _this._user.Password = '';
                    _this.userUpdated.emit(_this._user);
                    localStorage.setItem('user', JSON.stringify(_this._user));
                    _this.router.navigate(['/dashboard']);
                    _this.LoggedIn = _authenticationResult.Succeeded;
                });
            }
            else {
            }
        });
    };
    ;
    __decorate([
        core_1.Input()
    ], Login.prototype, "LoginPanelIsOpen", void 0);
    __decorate([
        core_1.ViewChild('usernameInput')
    ], Login.prototype, "usernameInput", void 0);
    __decorate([
        core_1.Output()
    ], Login.prototype, "userUpdated", void 0);
    Login = __decorate([
        core_1.Component({
            selector: 'lms-login',
            templateUrl: './lms/components/Login/Login.html',
            styleUrls: ['./lms/components/Login/Login.css'],
            providers: [Inputter]
        }),
        __param(0, core_1.Inject(membership_service_1.MembershipService)),
        __param(1, core_1.Inject(router_1.Router))
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=Login.js.map