import { Component, OnInit, Inject, Input, ElementRef, ViewChild, Renderer, Directive } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../classes/User';
import { OperationResult } from '../../classes/operationResult';
import { MembershipService } from '../../services/membership.service';

@Directive({
    selector: 'input[type=text][focusonload=true]'
})
class Inputter {
    constructor( @Inject(Renderer) public renderer: Renderer, @Inject(ElementRef) public elementRef: ElementRef) {

    }

    focus() {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus', []);
    }
}

@Component({
    selector: 'lms-login',
    templateUrl: './lms/components/Login/Login.html',
    styleUrls: ['./lms/components/Login/Login.css'],
    providers: [Inputter]
})
export class Login implements OnInit {
    @Input() LoginPanelIsOpen: boolean;
    Timeout: number;
    @ViewChild('usernameInput') usernameInput: Inputter;
    private _user: User;
    LoggedIn: boolean;

    constructor( @Inject(MembershipService) public membershipService: MembershipService,
        //public notificationService: NotificationService,
        @Inject(Router) public router: Router) { }

    ngOnInit() {
        this._user = new User('', '');
        this.LoggedIn = this.membershipService.isUserAuthenticated();
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
                _authenticationResult.Succeeded = res.Succeeded;
                _authenticationResult.Message = res.Message;
            },
            error => console.error('Error: ' + <any>error),
            () => {
                if (_authenticationResult.Succeeded) {
                    localStorage.setItem('user', JSON.stringify(this._user));
                    this.router.navigate(['home']);
                }
                else {
                    
                }
                this.LoggedIn = _authenticationResult.Succeeded;
            });
        //console.log(_authenticationResult);
    };
}