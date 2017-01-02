import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Services
import { GroupService } from './services/GroupService';
import { DataService } from './services/data.service';
import { MembershipService } from './services/membership.service';
import { AccountService } from './services/account.service';
import { UserAnnouncer } from './services/UserAnnouncer';

// Routing Guards
import { isAuthenticatedGuard } from './services/guards/isAuthenticated';

// Resolvers
import { userresolver } from './services/resolvers/userresolver';

// Modules
import { sharedModule } from './shared.module';

// Routes
import { LMS_Routes } from './lms.routes';

// Interfaces
import { IGroup } from './interfaces/Group';

// classes
import { Group } from './classes/Group';

// Components
import { GroupsList } from './components/GroupsList/GroupsList';
import { DropdownBox } from './components/dropdownbox/dropdownbox';

// Pages
import { AccountPage } from './pages/account/AccountPage.component';
import { HomePage } from './pages/home/HomePage.component';
import { RegisterPage } from './pages/register/register.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        sharedModule,
        LMS_Routes
    ],
    declarations: [
        GroupsList,
        HomePage,
        RegisterPage,
        AccountPage
    ],
    providers: [GroupService, DataService, MembershipService, AccountService, UserAnnouncer, isAuthenticatedGuard, userresolver]
})
export class featureModule { }
