import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/GroupService';
import { IGroup } from '../../interfaces/Group';

@Component({
    selector: 'lms-groups-list',
    templateUrl: './lms/components/GroupsList/GroupsList.html',
    styleUrls: ['./lms/components/GroupsList/GroupsList.css']
})
export class GroupsList {
    Groups: IGroup[];
    errorMessage: string;

    constructor(private _groupService: GroupService) { }
    
    ngOnInit(): void {
        this._groupService.getGroups()
            .subscribe(groups => this.Groups = groups,
                        error => this.errorMessage = <any>error);
    }
    
}