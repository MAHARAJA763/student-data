import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { LoginStudentComponent } from './login-student/login-student.component';

const APP_LAZY_ROUTES: Routes = [
    {
        path: 'student', component: StudentComponent
    },
    {
        path: 'addstudent', component: AddStudentComponent
    },
    {
        path: 'editstudent/:id', component: EditStudentComponent
    },
    {
        path: 'loginstudent', component: LoginStudentComponent
    }
];

export const APP_LAZY_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_LAZY_ROUTES, { 
    preloadingStrategy: NoPreloading,
 });