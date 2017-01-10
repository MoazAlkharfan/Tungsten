import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CourseService } from '../../../../../services/course.service';
import { Assignment } from '../../../../../classes/assignment';

@Component({
    templateUrl: './lms/pages/dashboard/pages/delete/removeassignment/removeassignment.component.html'
})
export class RemoveAssignmentPage implements OnInit {
    private assignment: Assignment;

    constructor(
        @Inject(ActivatedRoute) private _ActivatedRoute: ActivatedRoute,
        @Inject(CourseService) private _CourseService: CourseService,
        @Inject(Router) private _Router: Router
    ) { };

    ngOnInit() {
        this._ActivatedRoute.data.subscribe((data: { assignment: Assignment }) => {
            this.assignment = data.assignment;
        });
    }

    Remove() {
        // TODO: assignment.service.remove
    }
}