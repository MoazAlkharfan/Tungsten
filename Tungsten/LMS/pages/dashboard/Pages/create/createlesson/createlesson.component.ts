import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../../../services/account.service';
import { IGroup } from '../../../../../interfaces/group';
import { User } from '../../../../../classes/user';
import { OperationResult } from '../../../../../classes/operationResult';
import { Lesson } from '../../../../../classes/lesson';
import { Course } from '../../../../../classes/course';

@Component({
    templateUrl: 'lms/pages/dashboard/pages/create/createlesson/createlesson.component.html'
})
export class CreateLessonPage implements OnInit {
    private lesson: Lesson;
    private courses: Course[];
    private statusmessage: string;

    constructor(
        @Inject(ActivatedRoute) private _ActivatedRoute: ActivatedRoute,
        @Inject(AccountService) private _AccountService: AccountService,
        @Inject(Router) private _Router: Router
    )
    { }

    ngOnInit() {
        this._ActivatedRoute.data.subscribe((data: { courses: Course[] }) => {
            this.courses = data.courses;
        }, error => console.error(error), () => {

            if (!this.courses.length)
                this._Router.navigate(['../']);
        });
    }

    create() {
        console.log('sub');
        /*
        // TODO: submit created lesson
        this._AccountService.CreateAccount(this.user).subscribe((result: OperationResult) => {
            if (result.Succeeded === true)
                this._Router.navigate(['../']);
            else
                this.statusmessage = result.Message;
        });*/
    }
}