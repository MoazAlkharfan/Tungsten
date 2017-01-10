import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CourseService } from '../../../../../services/course.service';
import { Lesson } from '../../../../../classes/lesson';

@Component({
    templateUrl: './lms/pages/dashboard/pages/delete/removelesson/removelesson.component.html'
})
export class RemoveLessonPage implements OnInit {
    private lesson: Lesson;

    constructor(
        @Inject(ActivatedRoute) private _ActivatedRoute: ActivatedRoute,
        @Inject(CourseService) private _CourseService: CourseService,
        @Inject(Router) private _Router: Router
    ) { };

    ngOnInit() {
        this._ActivatedRoute.data.subscribe((data: { lesson: Lesson }) => {
            this.lesson = data.lesson;
        });
    }

    Remove() {
        // TODO: lesson.service.remove
    }
}