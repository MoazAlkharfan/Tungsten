import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
// routes
import { DASHBOARD_Routes } from './dashboard.routes';

// pages
import { Dashboard_Index } from './dashboard.component';

import { HomePage } from './pages/home/homepage.component';
import { TeacherHomePage } from './pages/home/teacher/teacher.component';
import { StudentHomePage } from './pages/home/student/student.component';


import { GroupsPage } from './pages/groups/groups.component';
import { GroupPage } from './pages/group/group.component';
import { CreateGroup } from './pages/creategroup/creategroup.component';
import { CreateCourse } from './pages/createcourse/createcourse.component';
import { CoursePage } from './pages/course/course.component';

// components
import { GroupsList } from '../../components/groupslist/GroupsList';
import { Schedule } from '../../components/Schedule/Schedule';
import { DropdownBox } from '../../components/dropdownbox/dropdownbox';
//import { course } from '../../components/course/course.component';

// services
import { UserAnnouncer } from '../../services/UserAnnouncer';
import { GroupService } from '../../services/groupservice';
import { ScheduleService } from '../../services/schedule.service';
import { CourseService } from '../../services/course.service';

// routing guards
import { isProperRoleGuard } from '../../services/guards/isproperrole';

// resolvers
import { userresolver } from '../../services/resolvers/userresolver';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DASHBOARD_Routes
    ],
    declarations: [
        Dashboard_Index,
        DropdownBox,
        HomePage,
        GroupPage,
        GroupsPage,
        GroupsList,
        CreateGroup,
        CreateCourse,
        Schedule,
        TeacherHomePage,
        StudentHomePage,
        CoursePage
    ],
    providers: [
        UserAnnouncer,
        GroupService,
        CourseService,
        ScheduleService,
        isProperRoleGuard,
        userresolver
    ]
})
export class Dashboard { }