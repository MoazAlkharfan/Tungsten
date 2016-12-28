import { Component, Inject } from '@angular/core';
import { GroupService } from '../../../../services/groupservice';
import { Group } from '../../../../classes/group';
import { Router } from '@angular/router';

@Component({
    templateUrl: './lms/pages/dashboard/pages/creategroup/creategroup.component.html'
})
export class CreateGroup {
    private group: Group = new Group('','');
    constructor(
        @Inject(GroupService) private _GroupService: GroupService,
        @Inject(Router) private router: Router,
    ) { }

    Create() {
        this._GroupService.createGroup(this.group).subscribe((group) => { this.group = group }
            , error => console.error(error),
            () => {
                if (this.group.Id)
                    this.router.navigate(['/dashboard', { outlets: { dashboard: ['group', this.group.Id] } }]);
                else
                    console.log('Error creating group');
            });
    }
}