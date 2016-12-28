import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/rx';
import { ScheduleSegment } from '../interfaces/ScheduleSegment';

@Injectable()
export class ScheduleService {
    constructor( @Inject(Http) private http: Http) { }

    getSchedule(groupId: string): Observable<ScheduleSegment[]> {
        return this.http.get('/Home/GetGroups', { body: { id: groupId } })
            .do(this.logData)
            .catch(this.handleError)
            .map(this.extractGroups);
    }

    private logData(data) {
        console.log(String(data));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private extractGroups(res: Response) {
        let body = <ScheduleSegment[]>JSON.parse(res.json());
        return body || [];
    }
}