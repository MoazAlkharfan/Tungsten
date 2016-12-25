import { Injectable, Inject } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { MembershipService } from '../membership.service';

@Injectable()
export class isAuthenticatedGuard implements CanActivate, CanActivateChild {
    constructor( @Inject(MembershipService) private _membershipService: MembershipService, @Inject(Router) private router: Router) { }

    canActivateChild() {
        if (this._membershipService.isUserAuthenticated()) {
            return true;
        } else {
            this.router.navigateByUrl('');
            return false;
        }
    }

    canActivate() {
        if (this._membershipService.isUserAuthenticated())
        {
            return true;
        } else {
            this.router.navigateByUrl('');
            return false;
        }
    }

}