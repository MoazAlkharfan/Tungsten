import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
// routes
import { DASHBOARD_Routes } from './dashboard.routes';

// pages
import { Dashboard_Index } from './dashboard.component';
import { HomePage } from './pages/home/homepage.component';
import { GroupsPage } from './pages/groups/groups.component';
import { GroupPage } from './pages/group/group.component';
import { CreateGroup } from './pages/creategroup/creategroup.component';
import { CreateCourse } from './pages/createcourse/createcourse.component';

// components
import { GroupsList } from '../../components/groupslist/GroupsList';
import { Schedule } from '../../components/Schedule/Schedule';

// services
import { UserAnnouncer } from '../../services/UserAnnouncer';
import { GroupService } from '../../services/groupservice';
import { ScheduleService } from '../../services/schedule.service';
import { CourseService } from '../../services/course.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DASHBOARD_Routes
    ],
    declarations: [
        Dashboard_Index,
        HomePage,
        GroupPage,
        GroupsPage,
        GroupsList,
        CreateGroup,
        CreateCourse,
        Schedule
    ],
    providers: [
        UserAnnouncer,
        GroupService,
        CourseService,
        ScheduleService
    ]
})
export class Dashboard { }