import { Component, Inject, OnInit, trigger } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userresolver } from '../../services/resolvers/userresolver';
import { User } from '../../classes/user';

@Component({
    templateUrl: './lms/pages/dashboard/index.html',
    providers: [userresolver],
    host: { '[@routeAnimation]': 'true' },
    animations: [
        trigger('routeAnimation', [])
    ]
})
export class Dashboard_Index implements OnInit {
    user: User;
    constructor( @Inject(ActivatedRoute) private _ActivatedRoute: ActivatedRoute) { }


    ngOnInit() {
        this.user = this._ActivatedRoute.snapshot.data['user'];
    }
}