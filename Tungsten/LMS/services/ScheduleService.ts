//import { Injectable, Inject } from '@angular/core';
//import { Http } from '@angular/http';
//import { IScheduleComponent } from '../interfaces/ScheduleComponent';
//import { Observable } from 'rxjs/rx';

//@Injectable()
//export class ScheduleService {
//    constructor( @Inject(Http) private _http: Http) { }

//    getSchedule(groupId: string): Observable<IScheduleComponent[]> {

//        let o

//        return this._http.get('./Home/GetSchedule/', new { id: groupId })
//            .do(this.logData)
//            .catch(this.handleError)
//            .map(this.extractGroup);
//    }
//}