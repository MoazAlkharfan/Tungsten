import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Lesson } from '../../../../../classes/lesson';
import { Course } from '../../../../../classes/course';
import { GroupService } from '../../../../../services/groupservice';

@Component({
    templateUrl: './lms/pages/dashboard/pages/edit/editlesson/editlesson.component.html'
})
export class EditLessonPage implements OnInit {
    private lesson: Lesson;
    private courses: Course[];

    constructor(
        @Inject(ActivatedRoute) private _ActivatedRoute: ActivatedRoute,
        @Inject(GroupService) private _GroupService: GroupService,
        @Inject(Router) private _Router: Router
    ) { };

    ngOnInit() {
        this._ActivatedRoute.data.subscribe((data: { lesson: Lesson, courses: Course[] }) => {
            this.lesson = data.lesson;
            this.courses = data.courses;
        });
    }

    Save() {
        // TODO: lesson.service.edit
    }
}