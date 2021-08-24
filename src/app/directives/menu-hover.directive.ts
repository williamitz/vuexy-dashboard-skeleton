import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMenuHover]'
})
export class MenuHoverDirective {

  constructor( private el: ElementRef, private renderer: Renderer2 ) { }
    
    ngOnInit() {

    }

    @HostListener('mouseover') mouseover(){
      this.renderer.addClass(this.el.nativeElement, 'expanded');
      // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');

      // this.color=this.highlight;
    }

    @HostListener('mouseleave') mouseleave(){
      this.renderer.removeClass(this.el.nativeElement, 'expanded');
      // this.color=this.defaultColor;
    }

    // main-menu menu-fixed menu-light menu-accordion menu-shadow -actual
    // main-menu menu-fixed menu-light menu-accordion menu-shadow expanded

}
