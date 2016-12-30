import { Component, Inject, Output, EventEmitter, OnInit, AfterViewInit, animate, trigger, style, transition, state } from '@angular/core';
import { Resolve, ActivatedRoute } from '@angular/router';
import { User } from '../../../../../classes/user';
import { MembershipService } from '../../../../../services/membership.service';
import { Observable } from 'rxjs/Rx';
import { Course } from '../../../../../classes/course';
import { Group } from '../../../../../classes/group';
import { GroupService } from '../../../../../services/GroupService';

@Component({
    templateUrl: './lms/pages/dashboard/pages/home/teacher/teacher.component.html',
    host: { '[@routeAnimation]': 'true' },
    styles: [':host { display: block;  }'],//[':host { width: 300px; display: block; position: absolute; }'],
    animations: [
        trigger('routeAnimation', [
            state('*', style({ opacity: 1 })),
            state('void', style({position: 'absolute'})),
            transition('void => *', [
                style({ opacity: 0, position: 'absolute' }),
                animate('0.5s')
            ]),
            transition('* => void',
                animate('0.5s', style({
                    opacity: 0, position: 'absolute'
                }))
            )
        ])
    ]
})
export class TeacherHomePage implements OnInit {
    user: User;
    courses = new EventEmitter();
    assignments = new EventEmitter();
    schedule = new EventEmitter();
    groups: Group[];
    constructor(@Inject(ActivatedRoute) private _ActivatedRoute: ActivatedRoute,
                @Inject(GroupService) private _groupService: GroupService,
                ) { }


    ngOnInit() {
        this.user = this._ActivatedRoute.snapshot.data['user'];
        this.courses.emit(this.user.Courses as Array<Course>);

        this._groupService.getGroups()
            .subscribe(Groups => {
                this.groups = Groups;
            },
            error => console.error(error), () => {
                //console.log('subscribtion finished');

            });

        
    }


}