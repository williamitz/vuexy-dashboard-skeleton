import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { GameLayoutComponent } from './layouts/game-layout/game-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [

    { path: '',
        pathMatch: 'full',
        component: GameLayoutComponent,
        loadChildren: () => import('./layouts/game-layout/game-layout.module').then(m => m.GameLayoutModule)
    },
    { path: 'game',
        // pathMatch: 'full',
        component: GameLayoutComponent,
        loadChildren: () => import('./layouts/game-layout/game-layout.module').then(m => m.GameLayoutModule)
    },
    { path: 'admin',
    // pathMatch: 'full',
        // canLoad: [TokenGuard, AuthGuard],
        component: AdminLayoutComponent,
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    },

    { path: '**', component: NotFoundComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
