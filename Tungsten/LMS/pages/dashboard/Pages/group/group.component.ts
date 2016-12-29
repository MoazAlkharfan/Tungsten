import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GroupService } from '../../../../services/groupservice';

import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './lms/pages/dashboard/pages/group/group.component.html',
    providers: [GroupService]
})
export class GroupPage implements OnInit {
    private Group;
    public GroupId;

    constructor(
        @Inject(ActivatedRoute) private route: ActivatedRoute,
        @Inject(GroupService) private _GroupService: GroupService
        ) { };

        ngOnInit() {
            this.GroupId = this.route.snapshot.params['id'];
            
            this._GroupService.getGroupById(this.GroupId)
                .subscribe((group) => { this.Group = group; },
                error => console.error(error),
                () => {
                    //console.log(this.Group);
                });

            
            
            //if(id)
            
            
            
            
        }
}