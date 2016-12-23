import { Component, Input, OnInit, ElementRef, Inject, ViewChild, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { GroupService } from './services/GroupService';
import { MembershipService } from './services/membership.service';
import { Login } from './components/Login/Login';
import { User } from './classes/User';

@Component({
    selector: 'lms-index',
    templateUrl: './LMS/index.html',
    styleUrls: ['./LMS/index.css'],
    providers: [GroupService]
})
export class IndexPage implements OnInit, AfterViewChecked {
    isuserloggedin: boolean;
    user: User;
    @ViewChild(Login) LoginView: Login;

    constructor( @Inject(ElementRef) private elementRef: ElementRef, @Inject(MembershipService) public membershipService: MembershipService, @Inject(ChangeDetectorRef) public changeDetectorRef: ChangeDetectorRef) {
        this.user = this.membershipService.getLoggedInUser();
        this.isuserloggedin = this.isUserLoggedIn();

    }
    
    isUserLoggedIn(): boolean {
        console.log('this.isUserLoggedIn() = ' + this.membershipService.isUserAuthenticated());
        return this.membershipService.isUserAuthenticated();
    }

    logout(): void {
        this.membershipService.logout()
            .subscribe(res => {
                localStorage.removeItem('user');
            },
            error => console.error('Error: ' + error),
            () => { this.isuserloggedin = false; console.log('login view should be displayed!'); });
    }
    
    ngAfterViewChecked() {
        if (this.LoginView && this.LoginView.LoggedIn && this.isuserloggedin != this.LoginView.LoggedIn)
            this.isuserloggedin = this.LoginView.LoggedIn;

        this.changeDetectorRef.detectChanges();
    }

    //console.log(this.isuserloggedin);

    ngOnInit(): void {
        //console.log('Loggedin:');
        //console.log(this.isuserloggedin);
    }
}