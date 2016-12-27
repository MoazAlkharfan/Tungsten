import { Component, OnInit, Inject } from '@angular/core';
import { GroupService } from '../../services/GroupService';
import { IGroup } from '../../interfaces/Group';
import { Router } from '@angular/router';

@Component({
    selector: 'lms-groups-list',
    templateUrl: './lms/components/GroupsList/GroupsList.html',
    styleUrls: ['./lms/components/GroupsList/GroupsList.css']
})
export class GroupsList implements OnInit {
    Groups: IGroup[];
    errorMessage: string;

    constructor( @Inject(GroupService) private _groupService: GroupService,
        @Inject(Router) private router: Router) { }

    ngOnInit(): void {
        this._groupService.getGroups()
            .subscribe(Groups => {
                this.Groups = Groups;
            },
            error => this.errorMessage = <any>error);
    }

    logGroupId(id) {
        this.router.navigate([{ outlets: { dashboard: ['group', id] } }]);
    }
}