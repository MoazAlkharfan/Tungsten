import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../../../../classes/user';
import { IGroup } from '../../../../../interfaces/group';
import { GroupService } from '../../../../../services/groupservice';
import { Assignment } from '../../../../../classes/assignment';

@Component({
    templateUrl: './lms/pages/dashboard/pages/edit/editassignment/editassignment.component.html'
})
export class EditAssignmentPage implements OnInit {
    private Group: IGroup;
    private assignment: Assignment;

    constructor(
        @Inject(ActivatedRoute) private _ActivatedRoute: ActivatedRoute,
        @Inject(GroupService) private _GroupService: GroupService,
        @Inject(Router) private _Router: Router
    ) { };

    ngOnInit() {
        this._ActivatedRoute.data.subscribe((data: { assignment: Assignment }) => {
            this.assignment= data.assignment;
        });
    }

    Save() {
        // TODO: assignment.service.save
    }
}