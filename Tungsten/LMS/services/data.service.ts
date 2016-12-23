import { Http, Response, Headers } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {

    public _pageSize: number;
    public _baseUri: string;

    constructor( @Inject(Http) public http: Http) {
        //this.http._defaultOptions.headers.set('__requestverificationtoken', document.getElementById('antiForgeryForm').childNodes[1].nodeValue.toString());
    }

    createAuthorizationHeader(headers: Headers) {
        var antiForgeryToken = document.getElementById('antiForgeryForm').childNodes[1].nodeValue;
        console.log(antiForgeryToken);
        //headers.append('Authorization', 'Basic ' +
        //    btoa('username:password'));
    }

    set(baseUri: string, pageSize?: number): void {
        this._baseUri = baseUri;
        this._pageSize = pageSize;
    }

    get(page: number) {
        var uri = this._baseUri + page.toString() + '/' + this._pageSize.toString();

        return this.http.get(uri)
            .do(this.logData)
            .map(response => {
                console.log(response);
                return <Response>response.json();
            });
    }

    post(data?: any, mapJson: boolean = true) {
        
        if (mapJson) {
            return this.http.post(this._baseUri, data)
                .catch(this.handleError)
                .map(this.extractData);
        }
        else
            return this.http.post(this._baseUri, data)
                .catch(this.handleError);
    }

    delete(id: number) {
        return this.http.delete(this._baseUri + '/' + id.toString())
            .map(response => <any>(<Response>response).json())
    }

    deleteResource(resource: string) {
        return this.http.delete(resource)
            .map(response => <any>(<Response>response).json())
    }

    private extractData(res: Response) {
        let body = <any>res.json();
        return body || [];
    }

    private logData(data) {
        console.log('Response from post data.service.ts');
        console.log(data);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}