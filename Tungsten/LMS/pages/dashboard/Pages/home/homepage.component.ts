import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembershipService } from '../../../../services/membership.service';

@Component({
    templateUrl: './lms/pages/dashboard/pages/home/homepage.component.html'
})
export class HomePage implements OnInit {
    constructor(
        @Inject(Router) private router: Router,
        @Inject(MembershipService) private _membershipService: MembershipService
    ) { }

    ngOnInit() {
        this._membershipService.getLoggedInUser().Roles.forEach((val, index, obj) => {
            if (val == "Teacher") {
                this.router.navigate(['/dashboard', { outlets: { dashboard: ['teacher'] } }]);
                console.log('redirected to teacher');
            }
            else if (val == 'Admin') {
                this.router.navigate(['/dashboard', { outlets: { dashboard: ['admin'] } }]);
                console.log('redirected to admin');
            }
            else{
                this.router.navigate(['/dashboard', { outlets: { dashboard: ['student'] } }]);
                console.log('redirected to student');
            }
        });
    }

}