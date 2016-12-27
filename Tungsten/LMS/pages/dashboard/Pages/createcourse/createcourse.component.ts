﻿import { Component, Inject, OnInit } from '@angular/core';
import { CourseService } from '../../../../services/course.service';
import { Course } from '../../../../classes/Course';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './lms/pages/dashboard/pages/createcourse/createcourse.component.html'
})
export class CreateCourse implements OnInit {
    private course: Course = new Course('', '', '', '', '');
    constructor(
        @Inject(CourseService) private _CourseService: CourseService,
        @Inject(Router) private router: Router,
        @Inject(ActivatedRoute) private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        let id = this.route.snapshot.params['groupid'];
        if (!id)
        {
            console.log('thaaaaa foooooock');
            this.router.navigate(['/dashboard', { outlets: { dashboard: ['groups'] } }]);
        }

        this.course.Id = id;
    }

    Create() {
        this._CourseService.createCourse(this.course).subscribe((course) => { this.course = course }
            , error => console.error(error),
            () => {
                if (this.course.Id)
                    console.log(this.course);//this.router.navigate(['/dashboard', { outlets: { dashboard: ['course', this.course.Id] } }]);
                else
                    console.log('Error creating group');
            });
    }
}