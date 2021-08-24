import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


// import { NotFoundComponent } from '../../pages/not-found/not-found.component';
import { AhomeComponent } from '../../pages/adminPages/ahome/ahome.component';
import { AsettingsComponent } from '../../pages/adminPages/asettings/asettings.component';
import { AcartonComponent } from 'src/app/pages/adminPages/acarton/acarton.component';
import { AuserComponent } from 'src/app/pages/adminPages/auser/auser.component';

export const ADMIN_ROUTES: Routes = [
    { path: '', component: AhomeComponent },
    { path: 'playing', component: AsettingsComponent },
    { path: 'carton', component: AcartonComponent },
    { path: 'user', component: AuserComponent },
    { path: '**', component: AhomeComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

