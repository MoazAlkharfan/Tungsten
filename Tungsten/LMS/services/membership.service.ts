import { Http, Response, Request } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { DataService } from './data.service';
import { Registration } from '../classes/registration';
import { User } from '../classes/User';
import { UserAnnouncer } from './userannouncer';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MembershipService {

    private _accountRegisterAPI: string = '/Account/Register/';
    private _accountLoginAPI: string = '/Account/Login/';
    private _accountLogoutAPI: string = '/Account/LogOff/';
    private _accountUserInfo: string = '/Account/GetUserInfo/';
    private _accountUserAuthenticated: string = '/Account/IsAuthenticated';

    constructor(@Inject(DataService) public accountService: DataService//,
                ,@Inject(UserAnnouncer) private _UserAnnouncer: UserAnnouncer
    ) { }

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

    isUserAuthenticated(): Observable<boolean> {
        let ishe: boolean = false;

        this.accountService.set(this._accountUserAuthenticated);
        return this.accountService.post(null);
        
    }

    getLoggedInUser(): Observable<User> {
        let _user: User = new User('', '', '', '', []);
        let authenticated: boolean;

        return this.isUserAuthenticated().map((result) => {
            if (result) {
                return this.getUserInfo(_user).subscribe((result) => {
                    return <User>result;
                    //_user = <User>result;
                }, error => console.error('Error: ' + error), () => {
                    // this._UserAnnouncer.announceUser(_user);
                });
            }
            else {
                
            }
        }).first();
    }

    getUserInfo(_user?: User): any {
        this.accountService.set(this._accountUserInfo);
        return this.accountService.post(_user);
    }


}