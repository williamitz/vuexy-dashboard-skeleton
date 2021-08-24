import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GnavbarComponent } from './gnavbar/gnavbar.component';
import { GactionsComponent } from './gactions/gactions.component';
import { GballsComponent } from './gballs/gballs.component';
import { GjackpotComponent } from './gjackpot/gjackpot.component';
import { GpoolComponent } from './gpool/gpool.component';
import { GstreamingComponent } from './gstreaming/gstreaming.component';
import { RouterModule } from '@angular/router';
import { GmodalAlertComponent } from './gmodal-alert/gmodal-alert.component';
import { GmodalTicketComponent } from './gmodal-ticket/gmodal-ticket.component';
import { GmodalConfirmComponent } from './gmodal-confirm/gmodal-confirm.component';

@NgModule({
    declarations: [
        GactionsComponent,
        GballsComponent,
        GjackpotComponent,
        GnavbarComponent,
        GpoolComponent,
        GstreamingComponent,

        GmodalAlertComponent,
        GmodalTicketComponent,
        GmodalConfirmComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule
    ],
    exports: [
        GactionsComponent,
        GballsComponent,
        GjackpotComponent,
        GnavbarComponent,
        GpoolComponent,
        GstreamingComponent,

        GmodalAlertComponent,
        GmodalTicketComponent,
        GmodalConfirmComponent
    ],
    providers: [],
})
export class GameComponentsModule {}