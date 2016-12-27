﻿import { Component, OnInit, Inject, Output } from '@angular/core';
import { MembershipService } from '../../services/membership.service';
import { EditModel } from '../../classes/editmodel';
import { User } from '../../classes/user';
import { AccountService } from '../../services/account.service';
import { OperationResult } from '../../classes/operationresult';
import { UserAnnouncer } from '../../services/UserAnnouncer';



@Component({
    templateUrl: './lms/pages/account/AccountPage.html',
    providers: [UserAnnouncer]
})
export class AccountPage implements OnInit {
    user: User;
    newuser: EditModel = new EditModel('', '', '', '', '');

    constructor( @Inject(MembershipService) private _MembershipService: MembershipService,
        @Inject(AccountService) private _AccountService: AccountService,
        @Inject(UserAnnouncer) private _UserAnnouncer: UserAnnouncer
    ) { }


    ngOnInit() {
        this.user = this._MembershipService.getLoggedInUser();
    }

    Save() {
        var _authenticationResult: OperationResult = new OperationResult(false, '');
        this._AccountService.EditAccount(this.newuser)
            .subscribe(res => {
            _authenticationResult = res;
        },
            error => console.error('Error: ' + <any>error),
            () => {
                if (_authenticationResult.Succeeded) {
                    if (this.newuser.Email)
                        this.user.Email = this.newuser.Email;
                    if (this.newuser.Username)
                    {
                        this.user.Username = this.newuser.Username;
                        this.user.Name = this.newuser.Username;
                    }

                    this._UserAnnouncer.announceUser(this.user);
                    localStorage.setItem('user', JSON.stringify(this.user));
                }
                else {
                    
                }


            });
    }
}