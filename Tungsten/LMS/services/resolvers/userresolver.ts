import { Injectable, Inject } from '@angular/core';
import { Resolve } from '@angular/router';
import { User } from '../../classes/user';
import { MembershipService } from '../membership.service';
import { UserAnnouncer } from '../userannouncer';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class userresolver implements Resolve<User> {
    constructor( @Inject(MembershipService) private _MembershipService: MembershipService,
        @Inject(UserAnnouncer) private _UserAnnouncer: UserAnnouncer) { }

    resolve(): Observable<User> {
        return this._MembershipService.getUserInfo().map(user => {
            return <User>user;
        }).first();
    }

}