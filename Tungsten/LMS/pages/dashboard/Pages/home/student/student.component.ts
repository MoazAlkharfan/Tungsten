import { Component, Inject, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { Resolve, ActivatedRoute } from '@angular/router';
import { User } from '../../../../../classes/user';
import { MembershipService } from '../../../../../services/membership.service';
import { Observable } from 'rxjs/Rx';
import { Course } from '../../../../../classes/course'

@Component({
    templateUrl: './lms/pages/dashboard/pages/home/student/student.component.html'
})
export class StudentHomePage {
    user: User;
    courses = new EventEmitter();
    assignments = new EventEmitter();
    schedule = new EventEmitter();
    constructor( @Inject(ActivatedRoute) private _ActivatedRoute: ActivatedRoute) { }


    ngOnInit() {
        this.user = this._ActivatedRoute.snapshot.data['user'];
        this.courses.emit(<Course[]>this.user.Courses);
        //this.assignments.emit(this.user.Courses.)
    }


}