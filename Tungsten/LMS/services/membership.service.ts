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
    private _accountUserInfo: string = '/Account/GetUserInfo/';
    private _accountUserAuthenticated: string = '/Account/IsAuthenticated';


    constructor( @Inject(DataService) public accountService: DataService) { }

    register(newUser: Registration): any {

        this.accountService.set(this._accountRegisterAPI);
        
        return this.accountService.post(newUser);
    }

    login(creds: User): any {
        this.accountService.set(this._accountLoginAPI);
        return this.accountService.post(creds);
    }

    logout(): any {
        this.accountService.set(this._accountLogoutAPI);
        return this.accountService.post(null);
    }

    isUserAuthenticated(): boolean {
        let ishe: boolean = false;

        this.accountService.set(this._accountUserAuthenticated);
        this.accountService.post(null).subscribe((result) => { ishe = result }
            , error => console.error('Error: ' + error), () => {
                return ishe;
            });

        return ishe;
    }

    getLoggedInUser(): User {
        var _user: User;

        if (this.isUserAuthenticated()) {
            var _userData = JSON.parse(localStorage.getItem('user'));
            _user = <User>_userData;
        }

        return _user;
    }

    getUserInfo(_user: User): any {
        this.accountService.set(this._accountUserInfo);
        return this.accountService.post(_user);
    }


}