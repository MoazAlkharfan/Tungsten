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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.set = function (baseUri, pageSize) {
        this._baseUri = baseUri;
        this._pageSize = pageSize;
    };
    DataService.prototype.get = function (page) {
        var uri = this._baseUri + page.toString() + '/' + this._pageSize.toString();
        return this.http.get(uri)
            .do(this.logData)
            .map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    DataService.prototype.post = function (data, mapJson) {
        if (mapJson === void 0) { mapJson = true; }
        if (mapJson) {
            console.log('FromPostMethod data.service.ts');
            console.log(data);
            return this.http.post(this._baseUri, data)
                .catch(this.handleError)
                .map(this.extractData);
        }
        else
            return this.http.post(this._baseUri, data);
    };
    DataService.prototype.delete = function (id) {
        return this.http.delete(this._baseUri + '/' + id.toString())
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.deleteResource = function (resource) {
        return this.http.delete(resource)
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.extractData = function (res) {
        var body = JSON.parse(res.json());
        console.log('logging body');
        console.log(body);
        return body || [];
    };
    DataService.prototype.logData = function (data) {
        console.log('Response from post data.service.ts');
        console.log(JSON.parse(data));
    };
    DataService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(http_1.Http))
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map