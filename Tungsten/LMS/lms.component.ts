import { Component, Input, OnInit, ElementRef, Inject, ViewChild, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { GroupService } from './services/GroupService';
import { MembershipService } from './services/membership.service';
import { Login } from './components/Login/Login';
import { User } from './classes/User';
import { UserAnnouncer } from './services/UserAnnouncer';
import { Subscription } from 'rxjs/Subscription';
import { userresolver } from './services/resolvers/userresolver';

@Component({
    selector: 'lms-index',
    templateUrl: './LMS/index.html',
    styleUrls: ['./LMS/index.css'],
    providers: [GroupService, UserAnnouncer]
})
export class IndexPage implements OnInit, AfterViewChecked {
    isuserloggedin: boolean;
    public user: User;
    @ViewChild(Login) LoginView: Login;
    subscription: Subscription;

    constructor( @Inject(ElementRef) private elementRef: ElementRef,
        @Inject(MembershipService) public membershipService: MembershipService,
        @Inject(ChangeDetectorRef) public changeDetectorRef: ChangeDetectorRef,
        @Inject(UserAnnouncer) private _UserAnnouncer: UserAnnouncer

    ) {
        this.user = this.membershipService.getLoggedInUser() || new User('', '', '', '', []);
        this.isuserloggedin = this.isUserLoggedIn();
    }
    
    isUserLoggedIn(): boolean {
        return this.membershipService.isUserAuthenticated();
    }

    logout(): void {
        this.membershipService.logout()
            .subscribe(res => {
                localStorage.removeItem('user');
            },
            error => console.error('Error: ' + error),
            () => {
                this.isuserloggedin = false;
                this.user = new User('', '', '', '', []);
            });
    }
    
    ngAfterViewChecked() {
        if (this.LoginView && this.LoginView.LoggedIn && this.isuserloggedin != this.LoginView.LoggedIn)
            this.isuserloggedin = this.LoginView.LoggedIn;

        this.changeDetectorRef.detectChanges();
    }

    userUpdated(updatedUser: User) {
        this.user = updatedUser;
    }

    public getUser(): User {
        return this.user;
    }
    //console.log(this.isuserloggedin);

    ngOnInit(): void {
        // this is the antiforgery token DON't REMOVE
        console.log('Anti Forgery Token passed from the razor Home/Index View');
        console.log(document.getElementById('antiForgeryForm').childNodes[1].attributes.getNamedItem("value").nodeValue);

        this.subscription = this._UserAnnouncer.userAnnounced.subscribe(
            user => {
                console.log('user from lms.component event:')
                console.log(this.user);
                this.user = user;

            }
        );
    }
}