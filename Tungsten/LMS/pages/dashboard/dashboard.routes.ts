import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Pages
// Home Pages
import { HomePage } from './pages/home/homepage.component';
import { TeacherHomePage } from './pages/home/teacher/teacher.component';
import { StudentHomePage } from './pages/home/student/student.component';
//import { HomePage } from './pages/home/admin/admin.component';

//  Other Pages
import { Dashboard_Index } from './dashboard.component';
import { GroupsPage } from './pages/groups/groups.component';
import { GroupPage } from './pages/group/group.component';
import { CoursePage } from './pages/course/course.component';

// Create Pages
import { CreateGroup } from './pages/create/creategroup/creategroup.component';
import { CreateCourse } from './pages/create/createcourse/createcourse.component';
import { CreateParticipantPage } from './pages/create/createparticipant/createparticipant.component';
import { CreateLessonPage } from './pages/create/createlesson/createlesson.component';
import { CreateSegmentPage } from './pages/create/createsegment/createsegment.component';
import { CreateAssignmentPage } from './pages/create/createassignment/createassignment.component';

// Edit Pages
import { EditGroupPage } from './pages/edit/editgroup/editgroup.component';
import { EditAssignmentPage } from './pages/edit/editassignment/editassignment.component';
import { EditCoursePage } from './pages/edit/editcourse/editcourse.component';
import { EditLessonPage } from './pages/edit/editlesson/editlesson.component';
import { EditParticipantPage } from './pages/edit/editparticipant/editparticipant.component';
import { EditSegmentPage } from './pages/edit/editsegment/editsegment.component';

// Delete Pages
import { RemoveCoursePage } from './pages/delete/removecourse/removecourse.component';
import { RemoveGroupPage } from './pages/delete/removegroup/removegroup.component';
import { RemoveAssignmentPage } from './pages/delete/removeassignment/removeassignment.component';
import { RemoveLessonPage } from './pages/delete/removelesson/removelesson.component';
import { RemoveParticipantPage } from './pages/delete/removeparticipant/removeparticipant.component';
import { RemoveSegmentPage } from './pages/delete/removesegment/removesegment.component';




// Routing Guards
import { isAuthenticatedGuard } from '../../services/guards/isAuthenticated';
import { isProperRoleGuard } from '../../services/guards/isproperrole';

// Resolvers
import { userresolver } from '../../services/resolvers/userresolver';
import { usersresolver } from '../../services/resolvers/usersresolver';
import { homepageresolver } from '../../services/resolvers/homepageresolver';
import { GroupResolver } from '../../services/resolvers/groupresolver';
import { GroupsResolver } from '../../services/resolvers/groupsresolver';
import { CourseResolver } from '../../services/resolvers/courseresolver';


// Note:
// implement is teacherguard, ( problem adding canActivate on a child )
const routes: Routes = [
    {
        path: '', component: Dashboard_Index, canActivateChild: [isProperRoleGuard], canActivate: [isAuthenticatedGuard],
        resolve: { user: userresolver },
        children:
        [
            { path: 'student', component: StudentHomePage, resolve: { user: userresolver, pageModel: homepageresolver } },
            { path: 'teacher', component: TeacherHomePage, resolve: { user: userresolver, pageModel: homepageresolver } },
            { path: 'admin', component: HomePage },
            { path: 'groups', component: GroupsPage, resolve: { user: userresolver } },
            { path: 'group/:id', component: GroupPage, resolve: { user: userresolver, group: GroupResolver } },
            { path: 'course/:id', component: CoursePage, resolve: { course: CourseResolver } },

            // Create Routes
            { path: 'createparticipant', component: CreateParticipantPage, resolve: { groups: GroupsResolver } },
            { path: 'creategroup', component: CreateGroup, resolve: { user: userresolver } },
            { path: 'createcourse/:id', component: CreateCourse },
            { path: 'createassignment', component: CreateAssignmentPage },
            { path: 'createlesson', component: CreateLessonPage },
            { path: 'createsegment', component: CreateSegmentPage },

            // Edit Routes
            { path: 'editgroup/:id', component: EditGroupPage, resolve: { user: userresolver, group: GroupResolver } },
            { path: 'editcourse/:id', component: EditCoursePage, resolve: { course: CourseResolver } },
            { path: 'editassignment/:id', component: EditAssignmentPage },
            { path: 'editlesson/:id', component: EditLessonPage },
            { path: 'editparticipant/:id', component: EditParticipantPage },
            { path: 'editsegment/:id', component: EditSegmentPage },

            // Delete Routes
            { path: 'removegroup/:id', component: RemoveGroupPage, resolve: { user: userresolver, group: GroupResolver } },
            { path: 'removecourse/:id', component: RemoveCoursePage, resolve: { course: CourseResolver } },
            { path: 'removeparticipant/:id', component: RemoveGroupPage, resolve: { user: userresolver, group: GroupResolver } },
            { path: 'removeassignment/:id', component: RemoveAssignmentPage },
            { path: 'removelesson/:id', component: RemoveLessonPage },
            { path: 'removesegment/:id', component: RemoveSegmentPage },
        ]
    }
];

export const DASHBOARD_Routes: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }

