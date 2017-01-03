import { Injectable, Inject } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { User } from '../../classes/user';
import { MembershipService } from '../membership.service';
import { UserAnnouncer } from '../userannouncer';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class userresolver implements Resolve<User> {
    constructor( @Inject(MembershipService) private _MembershipService: MembershipService,
        @Inject(Router) private _Router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
        return this._MembershipService.getUserInfo().map(user => {
            if (user instanceof User) {
                return <User>user;
            } else {
                this._Router.navigate(['/']);
                return null;
            }
            
        }).first();
    }

};