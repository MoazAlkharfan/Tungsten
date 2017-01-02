import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { Login } from './components/Login/Login';

@NgModule({
    declarations: [
        Login
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        FormsModule,
        CommonModule,
        Login
    ]


})
export class sharedModule { }