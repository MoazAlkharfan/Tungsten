import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/rx';
import { IGroup } from '../interfaces/Group';

import 'rxjs/rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class GroupService {
    constructor( @Inject(Http) private _http: Http) { }

    getGroups(): Observable<IGroup[]> {
        return this._http.get('./Home/GetGroups')
            .map((response: Response) => <IGroup[]>response.json())
            .do(data => console.log('All Groups:' + JSON.stringify(data)));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}