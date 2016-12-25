import { Component, OnInit, Inject } from '@angular/core';
import { MembershipService } from '../../services/membership.service';
import { User } from '../../classes/user';

@Component({
    templateUrl: './lms/pages/account/AccountPage.html'
})
export class AccountPage implements OnInit {
    user: User;

    constructor( @Inject(MembershipService) private _MembershipService: MembershipService) { }


    ngOnInit() {
        this.user = this._MembershipService.getLoggedInUser();
    }

    Save() {

    }
}