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
var GroupService_1 = require("../../services/GroupService");
var GroupsList = (function () {
    function GroupsList(_groupService) {
        this._groupService = _groupService;
    }
    GroupsList.prototype.ngOnInit = function () {
        var _this = this;
        this._groupService.getGroups()
            .subscribe(function (Groups) {
            _this.Groups = Groups;
        }, function (error) { return _this.errorMessage = error; });
    };
    return GroupsList;
}());
GroupsList = __decorate([
    core_1.Component({
        selector: 'lms-groups-list',
        templateUrl: './lms/components/GroupsList/GroupsList.html',
        styleUrls: ['./lms/components/GroupsList/GroupsList.css']
    }),
    __param(0, core_1.Inject(GroupService_1.GroupService))
], GroupsList);
exports.GroupsList = GroupsList;
//# sourceMappingURL=GroupsList.js.map