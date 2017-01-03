import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { UserAnnouncer } from '../userannouncer';
import { MembershipService } from '../membership.service';
import { User } from '../../classes/user';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class isProperRoleGuard implements CanActivateChild {
    constructor(
        @Inject(Router) private router: Router,
        @Inject(MembershipService) private _MembershipService: MembershipService
    ) { 

    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let currentroute = route.routeConfig.path;


        return this._MembershipService.getUserInfo().map((result: User) => {
            //console.log(result.Roles[0].toLowerCase());
            //console.log(currentroute);
            //console.log(this.getproperRoutes(result.Roles[0].toLowerCase()));
            if (this.getproperRoutes(result.Roles[0].toLowerCase()).indexOf(currentroute) != -1) {
                console.log('can navigate');
               return true;
            } else {
                console.log('cant navigate');
                this.router.navigateByUrl('');
                return false;
            }

        }).first();
    }

    getproperRoutes(role: string) {
        let routes = [];

        routes['student'] = ['student', 'assignments', 'groups', 'group/:id', 'creategroup', 'createcourse/:groupid','course/:courseid'];
        routes['teacher'] = ['teacher', 'assignments', 'groups', 'group/:id', 'creategroup', 'createcourse/:groupid', 'course/:courseid'];
        routes['admin'] = ['admin', 'assignments', 'groups', 'group/:id', 'creategroup', 'createcourse/:groupid', 'course/:courseid'];

        return routes[role];
    }
    
}