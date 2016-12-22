import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Pages
import { IndexPage } from './lms.component';
import { AccountPage } from './account/lms.component';
import { HomePage } from './home/HomePage.component';

// Services
import { GroupService } from './services/GroupService';

// Components
import { GroupsList } from './components/GroupsList/GroupsList';


// Interfaces
import { IGroup } from './interfaces/Group';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'account', component: AccountPage },
            { path: '', component: HomePage }, // / base url
            { path: '**', redirectTo: '', pathMatch: 'full' } // not found
        ])
    ],
    declarations: [
        IndexPage,
        HomePage,
        AccountPage,
        GroupsList
    ],
    bootstrap: [IndexPage]
})
export class AppModule { }