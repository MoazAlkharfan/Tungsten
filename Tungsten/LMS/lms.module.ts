import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import 'rxjs/Rx';

// Routes
import { LMS_Routes } from './lms.routes';

// Interfaces
import { IGroup } from './interfaces/Group';

// classes
import { Group } from './classes/Group';

// Services
import { GroupService } from './services/GroupService';
import { DataService } from './services/data.service';
import { MembershipService } from './services/membership.service';

// Components
import { GroupsList } from './components/GroupsList/GroupsList';
import { Login } from './components/Login/Login';

// Pages
import { IndexPage } from './lms.component';
import { AccountPage } from './account/AccountPage.component';
import { HomePage } from './home/HomePage.component';
import { RegisterPage } from './register/register.component';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        LMS_Routes
    ],
    declarations: [
        IndexPage,
        HomePage,
        AccountPage,
        RegisterPage,
        GroupsList,
        Login

    ],
    bootstrap: [IndexPage],
    providers: [GroupService, DataService, MembershipService]
})
export class AppModule { }