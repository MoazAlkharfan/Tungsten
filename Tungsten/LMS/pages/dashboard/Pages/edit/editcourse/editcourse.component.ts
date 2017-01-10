import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../../../../classes/user';
import { Course } from '../../../../../classes/course';
import { CourseService } from '../../../../../services/course.service';
import { Group } from '../../../../../classes/group';

@Component({
    templateUrl: './lms/pages/dashboard/pages/edit/editcourse/editcourse.component.html'
})
export class EditCoursePage implements OnInit {
    private course: Course;
    private groups: Group[];

    constructor(
        @Inject(ActivatedRoute) private _ActivatedRoute: ActivatedRoute,
        @Inject(CourseService) private _CourseService: CourseService,
        @Inject(Router) private _Router: Router
    ) { };

    ngOnInit() {
        this._ActivatedRoute.data.subscribe((data: { course: Course, groups: Group[] }) => {
            this.course = data.course;
            this.groups = data.groups;
        });
    }

    Save() {
        this._CourseService.edit(this.course).subscribe((course) => {
            this.course = course;
        }, error => console.error(error), () => {
                this._Router.navigate(['../']);
        });
    }
}