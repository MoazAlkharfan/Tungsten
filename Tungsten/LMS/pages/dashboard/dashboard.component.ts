import { Component } from '@angular/core';
import { userresolver } from '../../services/resolvers/userresolver';

@Component({
    templateUrl: './lms/pages/dashboard/index.html',
    providers: [userresolver]
})
export class Dashboard_Index {

}