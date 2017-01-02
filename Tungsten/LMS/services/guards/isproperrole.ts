import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { MembershipService } from '../membership.service';

@Injectable()
export class isProperRoleGuard implements CanActivateChild {
    constructor( @Inject(MembershipService) private _membershipService: MembershipService,
        @Inject(Router) private router: Router
    ) { }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let currentroute = route.routeConfig.path;

        if (this.getproperRoutes(this._membershipService.getLoggedInUser().Roles[0].toLowerCase()).indexOf(currentroute) != -1) {
            return true;
        } else {
            this.router.navigateByUrl('');
            return false;
        }
    }

    getproperRoutes(role: string) {
        let routes = [];

        routes['student'] = ['student', 'assignments', 'groups', 'group/:id', 'creategroup', 'createcourse/:groupid','course/:courseid'];
        routes['teacher'] = ['teacher', 'assignments', 'groups', 'group/:id', 'creategroup', 'createcourse/:groupid', 'course/:courseid'];
        routes['admin'] = ['admin', 'assignments', 'groups', 'group/:id', 'creategroup', 'createcourse/:groupid', 'course/:courseid'];

        return routes[role];
    }
    
}