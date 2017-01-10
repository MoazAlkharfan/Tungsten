import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

// routes
import { DASHBOARD_Routes, DashboardRoutingModule } from './dashboard.routes';

// pages
import { Dashboard_Index } from './dashboard.component';

import { HomePage } from './pages/home/homepage.component';
import { TeacherHomePage } from './pages/home/teacher/teacher.component';
import { StudentHomePage } from './pages/home/student/student.component';


import { GroupsPage } from './pages/groups/groups.component';
import { GroupPage } from './pages/group/group.component';
import { EditGroupPage } from './pages/edit/editgroup/editgroup.component';
import { RemoveGroupPage } from './pages/delete/removegroup/removegroup.component';
import { CreateGroup } from './pages/create/creategroup/creategroup.component';
import { CreateCourse } from './pages/create/createcourse/createcourse.component';
import { RemoveCoursePage } from './pages/delete/removecourse/removecourse.component';
import { CoursePage } from './pages/course/course.component';
import { CreateParticipantPage } from './pages/create/createparticipant/createparticipant.component';

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
import { MembershipService } from '../../services/membership.service';

// routing guards
import { isProperRoleGuard } from '../../services/guards/isproperrole';

// resolvers
import { userresolver } from '../../services/resolvers/userresolver';
import { homepageresolver } from '../../services/resolvers/homepageresolver';
import { GroupResolver } from '../../services/resolvers/groupresolver';
import { CourseResolver } from '../../services/resolvers/courseresolver';

// Pipes
import { FilterUserByNamePipe } from '../../pipes/filterPipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule,
        DashboardRoutingModule
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
        CoursePage,
        EditGroupPage,
        RemoveGroupPage,
        CreateParticipantPage,
        FilterUserByNamePipe,
        RemoveCoursePage
    ],
    providers: [
        UserAnnouncer,
        MembershipService,
        GroupService,
        CourseService,
        ScheduleService,
        isProperRoleGuard,
        userresolver,
        homepageresolver,
        GroupResolver,
        CourseResolver
    ]
})
export class Dashboard { }