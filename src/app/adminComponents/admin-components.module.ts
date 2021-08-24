import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { AnavbarComponent } from './anavbar/anavbar.component';
import { AfooterComponent } from './afooter/afooter.component';
import { AmenuComponent } from './amenu/amenu.component';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../directives/directives.module';

import {
    PerfectScrollbarConfigInterface,
    PerfectScrollbarModule,
    PERFECT_SCROLLBAR_CONFIG
  } from 'ngx-perfect-scrollbar';

  const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelPropagation: false
  };

@NgModule({
    declarations: [
        AsidebarComponent,
        AnavbarComponent,
        AfooterComponent,
        AmenuComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule,
        PerfectScrollbarModule,
        DirectivesModule
    ],
    exports: [
        AsidebarComponent,
        AnavbarComponent,
        AfooterComponent,
        AmenuComponent
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
        
    ],
})
export class AdminComponentsModule {}