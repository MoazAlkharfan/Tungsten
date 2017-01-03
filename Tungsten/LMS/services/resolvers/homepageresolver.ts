import { Injectable, Inject } from '@angular/core';
import { Resolve } from '@angular/router';
import { Http, Response } from '@angular/http';
import { HomePageModel } from '../../classes/homepagemodel';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class homepageresolver implements Resolve<HomePageModel> {

    constructor(
        @Inject(Http) private http: Http,
    ) {
    }

    resolve(): Observable<HomePageModel> {
        return this.http.get('/Account/GetHomePage').map((result: Response) => {
            return <HomePageModel>result.json();
        })
    }
}