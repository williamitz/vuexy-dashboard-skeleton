import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponentsModule } from 'src/app/gameComponents/game-components.module';
import { GhomeComponent } from '../../pages/gamePages/ghome/ghome.component';
import { GplayingComponent } from '../../pages/gamePages/gplaying/gplaying.component';
import { GAME_ROUTES } from './game-layout.routes';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        GhomeComponent,
        GplayingComponent,
    ],
    imports: [ 
        CommonModule,
        GameComponentsModule,
        RouterModule.forChild( GAME_ROUTES )
    ],
    exports: [],
    providers: [],
})
export class GameLayoutModule {}