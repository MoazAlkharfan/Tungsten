import { Component, OnInit, Inject } from '@angular/core';
import { GroupService } from '../../services/GroupService';
import { IGroup } from '../../interfaces/Group';

@Component({
    selector: 'lms-groups-list',
    templateUrl: './lms/components/GroupsList/GroupsList.html',
    styleUrls: ['./lms/components/GroupsList/GroupsList.css']
})
export class GroupsList implements OnInit {
    Groups: IGroup[];
    errorMessage: string;

    constructor( @Inject(GroupService) private _groupService: GroupService) { }

    ngOnInit(): void {
        this._groupService.getGroups()
            .subscribe(Groups => {
                this.Groups = Groups;
            },
            error => this.errorMessage = <any>error);

    }

}