import { Component, Input } from '@angular/core';
import { GroupService } from './services/GroupService';

@Component({
    selector: 'lms-index',
    templateUrl: './LMS/index.html',
    styleUrls: ['./LMS/index.css'],
    providers: [GroupService]
})
export class IndexPage {
    @Input() isUserLoggedin: boolean;
    @Input() UserName: string;
}