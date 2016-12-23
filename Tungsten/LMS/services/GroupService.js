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
var http_1 = require("@angular/http");
var rx_1 = require("rxjs/rx");
require("rxjs/rx");
var GroupService = (function () {
    function GroupService(_http) {
        this._http = _http;
    }
    GroupService.prototype.getGroups = function () {
        return this._http.get('./Home/GetGroups')
            .do(this.logData)
            .catch(this.handleError)
            .map(this.extractGroups);
    };
    GroupService.prototype.getGroupById = function (id) {
        return this._http.post('./Home/GetGroup/', id)
            .do(this.logData)
            .catch(this.handleError)
            .map(this.extractGroup);
    };
    GroupService.prototype.createGroup = function (group) {
        return this._http.post('./Home/CreateGroup/', group)
            .do(this.logData)
            .catch(this.handleError);
    };
    GroupService.prototype.deleteGroup = function (id) {
        return this._http.post('./Home/DeleteGroup', id)
            .do(this.logData)
            .catch(this.handleError);
    };
    GroupService.prototype.logData = function (data) {
        //console.log(String(data));
    };
    GroupService.prototype.handleError = function (error) {
        console.error(error);
        return rx_1.Observable.throw(error.json().error || 'Server error');
    };
    GroupService.prototype.extractGroups = function (res) {
        var body = JSON.parse(res.json());
        return body || [];
    };
    GroupService.prototype.extractGroup = function (res) {
        var body = JSON.parse(res.json());
        return body || null;
    };
    return GroupService;
}());
GroupService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(http_1.Http))
], GroupService);
exports.GroupService = GroupService;
//# sourceMappingURL=GroupService.js.map