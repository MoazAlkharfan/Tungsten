import { Component, Input } from '@angular/core';

@Component({
    selector: 'lms-index',
    templateUrl: './LMS/index.html',
    styleUrls: ['./LMS/index.css']
})
export class IndexPage {
    @Input() isUserLoggedin: boolean;
    @Input() UserName: string;
}