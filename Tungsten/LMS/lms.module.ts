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
import { AccountPage } from './pages/account/AccountPage.component';
import { HomePage } from './pages/home/HomePage.component';
import { RegisterPage } from './pages/register/register.component';
import { Dashboard } from './pages/dashboard/dashboard.module';

// directives
import { Autofocus } from './directives/autofocus';

// Routing Guards
import { isAuthenticatedGuard } from './services/guards/isAuthenticated';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        LMS_Routes,
        Dashboard
    ],
    declarations: [
        IndexPage,
        HomePage,
        AccountPage,
        RegisterPage,
        GroupsList,
        Login,
        Autofocus
    ],
    bootstrap: [IndexPage],
    providers: [GroupService, DataService, MembershipService, isAuthenticatedGuard]
})
export class AppModule { }