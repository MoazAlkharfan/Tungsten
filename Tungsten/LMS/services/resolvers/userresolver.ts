import { Injectable, Inject } from '@angular/core';
import { Resolve } from '@angular/router';
import { User } from '../../classes/user';
import { MembershipService } from '../membership.service';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class userresolver implements Resolve<User> {
    constructor( @Inject(MembershipService) private _MembershipService: MembershipService) { }

    resolve(): Observable<User> {
        let userid = this._MembershipService.getLoggedInUser();
        return this._MembershipService.getUserInfo(userid).map(user => {
            return <User>user;
        }).first();
    }

}