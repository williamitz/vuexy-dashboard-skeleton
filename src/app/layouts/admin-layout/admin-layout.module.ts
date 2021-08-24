import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AhomeComponent } from '../../pages/adminPages/ahome/ahome.component';
import { AsettingsComponent } from '../../pages/adminPages/asettings/asettings.component';
import { RouterModule } from '@angular/router';
import { ADMIN_ROUTES } from './admin-layout.routes';
import { AdminComponentsModule } from '../../adminComponents/admin-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { AcartonComponent } from 'src/app/pages/adminPages/acarton/acarton.component';
import { AuserComponent } from 'src/app/pages/adminPages/auser/auser.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    declarations: [
        AhomeComponent,
        AsettingsComponent,
        AcartonComponent,
        AuserComponent
    ],
    imports: [ 
        CommonModule,
        AdminComponentsModule,
        FlexLayoutModule,
        PerfectScrollbarModule,

        RouterModule.forChild( ADMIN_ROUTES ),
    ],
    exports: [

    ],
    providers: [
         {
          provide: PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ],
})
export class AdminLayoutModule {}