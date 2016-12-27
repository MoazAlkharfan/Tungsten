import { Injectable, EventEmitter, Output } from '@angular/core';
import { User } from '../classes/user';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserAnnouncer {
    private user = new Subject<User>();

    userAnnounced = this.user.asObservable();

    constructor() {
        console.log('announcer constructed');
    }

    announceUser(user: User) {
        console.log('announce user in userannouncer.ts called with user:')
        console.log(user);
        this.user.next(user);
    }
}