import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/rx';
import { IGroup } from '../interfaces/Group';
import { Group } from '../classes/Group';



@Injectable()
export class GroupService {
    constructor(private _http: Http) { }
    
    getGroups(): Observable<Group[]> {
        return this._http.get('./Home/GetGroups')
            .map((response: Response) => <Group[]>response.json())
            .do(data => console.log('All Groups:' + JSON.stringify(data)));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}