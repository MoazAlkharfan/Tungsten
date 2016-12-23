import { Component, Input, OnInit, ElementRef, Inject } from '@angular/core';
import { GroupService } from './services/GroupService';
import { MembershipService } from './services/membership.service';

@Component({
    selector: 'lms-index',
    templateUrl: './LMS/index.html',
    styleUrls: ['./LMS/index.css'],
    providers: [GroupService]
})
export class IndexPage implements OnInit {
    isuserloggedin: boolean;

    constructor( @Inject(ElementRef) private elementRef: ElementRef, @Inject(MembershipService) public membershipService: MembershipService,) {
        this.isuserloggedin = this.elementRef.nativeElement.getAttribute('isloggedin');
    }
    
    isUserLoggedIn(): boolean {
        return this.membershipService.isUserAuthenticated();
    }

    getUserName(): string {
        if (this.isUserLoggedIn()) {
            var _user = this.membershipService.getLoggedInUser();
            return _user.Username;
        }
        else
            return 'Account';
    }

    logout(): void {
        this.membershipService.logout()
            .subscribe(res => {
                localStorage.removeItem('user');
            },
            error => console.error('Error: ' + error),
            () => { });
    }
    

    
    @Input() username: string;

    //console.log(this.isuserloggedin);

    ngOnInit(): void {
        console.log('Loggedin:');
        console.log(this.isuserloggedin);
    }
}