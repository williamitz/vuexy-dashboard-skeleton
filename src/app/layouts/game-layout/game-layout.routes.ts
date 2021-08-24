import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { GhomeComponent } from '../../pages/gamePages/ghome/ghome.component';
import { GplayingComponent } from '../../pages/gamePages/gplaying/gplaying.component';
import { NotFoundComponent } from '../../pages/not-found/not-found.component';

export const GAME_ROUTES: Routes = [
    { path: '', component: GhomeComponent },
    { path: 'playing', component: GplayingComponent },
    { path: '**', component: NotFoundComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

