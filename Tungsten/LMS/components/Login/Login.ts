import { Component, OnInit, Inject, Input, ElementRef, ViewChild, Renderer, Directive, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../classes/User';
import { OperationResult } from '../../classes/operationResult';
import { MembershipService } from '../../services/membership.service';
import { Autofocus } from '../../directives/autofocus';
import { UserAnnouncer } from '../../services/userannouncer';

@Component({
    selector: 'lms-login',
    templateUrl: './lms/components/Login/Login.html',
    styleUrls: ['./lms/components/Login/Login.css'],
    providers: []
})
export class Login implements OnInit {
    @Input() LoginPanelIsOpen: boolean;
    @Input() _UserAnnouncer: UserAnnouncer;
    Timeout: any;

    public _user: User;
    LoggedIn: boolean;
    @Output() userUpdated = new EventEmitter();

    constructor( @Inject(MembershipService) public membershipService: MembershipService,
        //public notificationService: NotificationService,
        @Inject(Router) public router: Router,
        /*@Inject(UserAnnouncer) private _UserAnnouncer: UserAnnouncer*/) { }

    ngOnInit() {
        this._user = new User('', '', '', '', []);
        this.LoggedIn = this.membershipService.isUserAuthenticated();
    }

    eventHandler(key) {
        console.log(key);
    } 

    OpenPanel(): void {
        this.LoginPanelIsOpen = true;
        //this.usernameInput.focus();
        //this._elements.nativeElement.focus();
    }

    StopHidingPanel() {
        clearTimeout(this.Timeout);
    }

    ClosePanel(): void {
        this.Timeout = setTimeout(() => {
            this.LoginPanelIsOpen = false;
        }, 1000);
    }

    login(): void {
        var _authenticationResult: OperationResult = new OperationResult(false, '');
        this.membershipService.login(this._user)
            .subscribe(res => {
                _authenticationResult = res;
            },
            error => console.error('Error: ' + <any>error),
            () => {
                if (_authenticationResult.Succeeded) {
                    this.membershipService.getUserInfo(this._user)
                        .subscribe(ress => {
                            this._user = ress;
                        },
                        error => console.error('Error: ' + <any>error),
                        () => {

                            this._user.Password = '';
                            this._UserAnnouncer.announceUser(this._user);
                            //this.userUpdated.emit(this._user);

                            localStorage.setItem('user', JSON.stringify(this._user));
                            this.router.navigate(['/dashboard']);

                            this.LoggedIn = _authenticationResult.Succeeded;
                        });
                }
                else {
                    // login unsuccessful
                }
                
                
            });
    };
}