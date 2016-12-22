import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/rx';
import { IGroup } from '../interfaces/Group';

import 'rxjs/rx';

@Injectable()
export class GroupService {
    constructor( @Inject(Http) private _http: Http) { }

    getGroups(): Observable<IGroup[]> {
        return this._http.get('./Home/GetGroups')
            .do(this.logData)
            .catch(this.handleError)
            .map(this.extractData);
    }

    private logData(data) {
        console.log(JSON.parse(String(data)).length);
    }

    private extractData(res: Response) {
        let body = <IGroup[]>JSON.parse(res.json());
        return body || [];
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}