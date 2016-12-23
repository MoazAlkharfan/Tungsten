import { Http, Response, Request } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { DataService } from './data.service';
import { Registration } from '../classes/registration';
import { User } from '../classes/User';

@Injectable()
export class MembershipService {

    private _accountRegisterAPI: string = '/Account/Register/';
    private _accountLoginAPI: string = '/Account/Login/';
    private _accountLogoutAPI: string = '/Account/LogOff/';

    constructor( @Inject(DataService) public accountService: DataService) { }

    register(newUser: Registration) {

        this.accountService.set(this._accountRegisterAPI);
        
        return this.accountService.post(JSON.stringify(newUser));
    }

    login(creds: User) {
        this.accountService.set(this._accountLoginAPI);
        return this.accountService.post(JSON.stringify(creds));
    }

    logout() {
        this.accountService.set(this._accountLogoutAPI);
        return this.accountService.post(null, false);
    }

    isUserAuthenticated(): boolean {
        var _user: any = localStorage.getItem('user');
        if (_user != null)
            return true;
        else
            return false;
    }

    getLoggedInUser(): User {
        var _user: User;

        if (this.isUserAuthenticated()) {
            var _userData = JSON.parse(localStorage.getItem('user'));
            _user = new User(_userData.Username, _userData.Password);
        }

        return _user;
    }
}