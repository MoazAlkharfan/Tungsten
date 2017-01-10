import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../../../services/account.service';
import { IGroup } from '../../../../../interfaces/group';
import { User } from '../../../../../classes/user';
import { OperationResult } from '../../../../../classes/operationResult';
import { Lesson } from '../../../../../classes/lesson';
import { Course } from '../../../../../classes/course';
import { Segment } from '../../../../../classes/segment';
import { Assignment } from '../../../../../classes/assignment';

@Component({
    templateUrl: 'lms/pages/dashboard/pages/create/createassignment/createassignment.component.html'
})
export class CreateAssignmentPage implements OnInit {
    private assignment: Assignment;
    private segments: Segment[];
    
    private statusmessage: string;

    constructor(
        @Inject(ActivatedRoute) private _ActivatedRoute: ActivatedRoute,
        @Inject(AccountService) private _AccountService: AccountService,
        @Inject(Router) private _Router: Router
    )
    { }

    ngOnInit() {
        this._ActivatedRoute.data.subscribe((data: { segments: Segment[] }) => {
            this.segments= data.segments;
        }, error => console.error(error), () => {

            if (!this.segments.length) // there are no segments to create assignments for
                this._Router.navigate(['../']);
        });
    }

    create() {
        console.log('sub');
        // TODO: submit created assignment and uploadfile
    }
}