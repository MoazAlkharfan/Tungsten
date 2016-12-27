import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: './lms/pages/dashboard/pages/group/group.component.html'
})
export class GroupPage implements OnInit {
    constructor( @Inject(ActivatedRoute) private route: ActivatedRoute) { };

        ngOnInit() {
            let id = this.route.snapshot.params['id'];
            //this.route.params.switchMap((params) => {
            //    console.log(params);
            //});
            console.log(id);
        }
}