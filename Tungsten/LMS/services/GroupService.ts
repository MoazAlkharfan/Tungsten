import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/rx';
import { IGroup } from '../interfaces/Group';
import { DataService } from './data.service';

import 'rxjs/rx';

@Injectable()
export class GroupService {
    constructor( @Inject(Http) private _http: Http) { }

    getGroups(): Observable<IGroup[]> {
        return this._http.get('/Home/GetGroups')
            //.do(this.logData)
            .catch(this.handleError)
            .map(this.extractGroups);

    }

    getGroupById(id: string): Observable<IGroup> {
        return this._http.post('/Home/GetGroup/', { id: id })
            //.do(this.logData)
            .catch(this.handleError)
            .map(this.extractGroup);
    }

    createGroup(group: IGroup) {
        return this._http.post('/Home/CreateGroup/', group)
            //.do(this.logData)
            .catch(this.handleError)
            .map(this.extractGroup);
    }

    deleteGroup(id: string) {
        return this._http.post('/Home/DeleteGroup', id)
            .do(this.logData)
            .catch(this.handleError);
    }

    private logData(data) {
        console.log(String(data));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private extractGroups(res: Response) {
        let body = <IGroup[]>JSON.parse(res.json());
        return body || [];
    }

    private extractGroup(res: Response) {
        let body = <IGroup>JSON.parse(res.json());
        return body || null;
    }
}