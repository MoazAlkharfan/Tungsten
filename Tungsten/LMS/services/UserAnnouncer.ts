import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../classes/user';


@Injectable()
export class UserAnnouncer {
    public user: EventEmitter<User>;

    constructor() {
        this.user = new EventEmitter<User>();
    }

    announceUser(user: User) {
        console.log(user);
        this.user.next(user);
    }
}