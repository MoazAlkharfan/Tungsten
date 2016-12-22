import { Component, Input, OnInit } from '@angular/core';
import { GroupService } from './services/GroupService';

@Component({
    selector: 'lms-index',
    templateUrl: './LMS/index.html',
    styleUrls: ['./LMS/index.css'],
    providers: [GroupService]
})
export class IndexPage implements OnInit {
    private isuserloggedin: string;

    @Input()
    set loginstatus(isloggedin: string) {
        console.log(isloggedin);
        this.isuserloggedin = (isloggedin && isloggedin.trim()) || 'False';

    }
    get loginstatus(): string {
        return this.isuserloggedin;
    }

    @Input() username: string;

    //console.log(this.isuserloggedin);

    ngOnInit(): void {
        console.log('Loggedin:');
        console.log(this.isuserloggedin);
    }
}