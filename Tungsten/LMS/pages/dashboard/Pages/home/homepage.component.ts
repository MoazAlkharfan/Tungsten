import { Component, Inject, OnInit, animate, trigger, style, transition, state } from '@angular/core';
import { Router, Resolve } from '@angular/router';
import { MembershipService } from '../../../../services/membership.service';
import { User } from '../../../../classes/user';
import { Observable } from 'rxjs/Rx';

@Component({
    templateUrl: './lms/pages/dashboard/pages/home/homepage.component.html',
    host: { '[@routeAnimation]': 'true' },
    styles: [':host { display: block; position: absolute; }'],//[':host { width: 300px; display: block; position: absolute; }'],
    animations: [
        trigger('routeAnimation', [
            state('*', style({ opacity: 1 })),
            transition('void => *', [
                style({ opacity: 0, position: 'absolute', display: 'block'  }),
                animate('0.5s')
            ]),
            transition('* => void',
                animate('0.5s', style({
                    opacity: 0, position: 'absolute', display: 'block'
                }))
            )
        ])
    ]
})
export class HomePage implements OnInit {
    user: User;
    constructor(
        @Inject(Router) private router: Router,
        @Inject(MembershipService) private _membershipService: MembershipService
    ) { }

    ngOnInit() {
        let userroles = this._membershipService.getLoggedInUser().Roles;
        //console.log(userroles);
        if (!userroles.length)
            this.router.navigate(['/dashboard', { outlets: { dashboard: ['student'] } }]);

        userroles.forEach((val, index, obj) => {
            if (val == "Teacher") {
                this.router.navigate(['/dashboard', { outlets: { dashboard: ['teacher'] } }]);
                console.log('redirected to teacher');
            }
            else if (val == 'Admin') {
                this.router.navigate(['/dashboard', { outlets: { dashboard: ['admin'] } }]);
                console.log('redirected to admin');
            }
            else {
                this.router.navigate(['/dashboard', { outlets: { dashboard: ['student'] } }]);
                console.log('redirected to student');
            }
        });
    }



}