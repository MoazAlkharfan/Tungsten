import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//Pages
// Home Pages
import { HomePage } from './pages/home/homepage.component';
import { TeacherHomePage } from './pages/home/teacher/teacher.component';
import { StudentHomePage } from './pages/home/student/student.component';
//import { HomePage } from './pages/home/admin/admin.component';


//Other Pages
import { Dashboard_Index } from './dashboard.component';
import { GroupsPage } from './pages/groups/groups.component';
import { GroupPage } from './pages/group/group.component';
import { CreateGroup } from './pages/creategroup/creategroup.component';
import { CreateCourse } from './pages/createcourse/createcourse.component';
import { CoursePage } from './pages/course/course.component';


// Routing Guards
import { isAuthenticatedGuard } from '../../services/guards/isAuthenticated';
import { isProperRoleGuard } from '../../services/guards/isproperrole';

// Resolvers
import { userresolver } from '../../services/resolvers/userresolver';

// Note:
// implement is teacherguard, ( problem adding canActivate on a child )
const routes: Routes = [
    {
        path: 'dashboard', component: Dashboard_Index, canActivateChild: [isAuthenticatedGuard, isProperRoleGuard], resolve: { user: userresolver },
        children:
        [
            { path: '', component: HomePage, outlet: 'dashboard' }, // base url
            { path: 'student', component: StudentHomePage, outlet: 'dashboard', resolve: { user: userresolver } },
            { path: 'teacher', component: TeacherHomePage, outlet: 'dashboard', resolve: { user: userresolver } },
            { path: 'admin', component: HomePage, outlet: 'dashboard' },
            { path: 'groups', component: GroupsPage, outlet: 'dashboard', resolve: { user: userresolver } },
            { path: 'group/:id', component: GroupPage, outlet: 'dashboard' },
            { path: 'creategroup', component: CreateGroup, outlet: 'dashboard' },
            { path: 'createcourse/:groupid', component: CreateCourse, outlet: 'dashboard' },
            { path: 'course/:courseid', component: CoursePage, outlet: 'dashboard' }
        ]
    }
];

export const DASHBOARD_Routes: ModuleWithProviders = RouterModule.forChild(routes);