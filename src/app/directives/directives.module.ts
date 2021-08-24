import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHoverDirective } from './menu-hover.directive';
import { OpenItemDirective } from './open-item.directive';

@NgModule({
    declarations: [
        MenuHoverDirective,
        OpenItemDirective
    ],
    imports: [ CommonModule ],
    exports: [
        MenuHoverDirective,
        OpenItemDirective
    ],
    providers: [],
})
export class DirectivesModule {}