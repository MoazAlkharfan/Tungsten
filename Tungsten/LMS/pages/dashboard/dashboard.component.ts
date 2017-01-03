import { Component, Inject, OnInit, trigger } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../classes/user';
import { UserAnnouncer } from '../../services/UserAnnouncer';

@Component({
    templateUrl: './lms/pages/dashboard/index.html',
    providers: [UserAnnouncer],
    host: { '[@routeAnimation]': 'true' },
    animations: [
        trigger('routeAnimation', [])
    ]
})
export class Dashboard_Index implements OnInit {
    user: User;
    constructor( @Inject(ActivatedRoute) private _ActivatedRoute: ActivatedRoute) { }


    ngOnInit() {
        //this.user = this._ActivatedRoute.snapshot.data['user'];
    }
}