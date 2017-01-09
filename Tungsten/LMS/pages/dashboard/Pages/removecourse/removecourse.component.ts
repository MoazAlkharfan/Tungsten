import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CourseService } from '../../../../services/course.service';
import { Course } from '../../../../classes/course';

@Component({
    templateUrl: './lms/pages/dashboard/pages/removecourse/removecourse.component.html'
})
export class RemoveCoursePage implements OnInit {
    private course: Course;

    constructor(
        @Inject(ActivatedRoute) private _ActivatedRoute: ActivatedRoute,
        @Inject(CourseService) private _CourseService: CourseService,
        @Inject(Router) private _Router: Router
    ) { };

    ngOnInit() {
        this._ActivatedRoute.data.subscribe((data: { course: Course}) => {
            this.course = data.course;
        });
    }

    Remove() {
        this._CourseService.deleteCourse(this.course.Id).subscribe((course) => {
            this.course = course;
        }, error => console.error(error), () => {
                this._Router.navigate(['/dashboard']);
        });
    }
}