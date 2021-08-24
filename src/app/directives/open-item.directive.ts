import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOpenItem]'
})
export class OpenItemDirective {

  constructor( private el: ElementRef, private renderer: Renderer2 ) {
    console.log('open directive');
   }
  
  @HostListener('click') mouseover(){

    let elclass: string = this.el.nativeElement.className;
    let opended = elclass.indexOf('open') > 0 ? true : false;
    // console.log(this.el.nativeElement.innerHTML);

    if (!opended) {
      
      this.renderer.addClass(this.el.nativeElement, 'open');
    } else {
      
      this.renderer.removeClass(this.el.nativeElement, 'open');
    }
    // this.renderer.(this.el.nativeElement, 'expanded');
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');

    // this.color=this.highlight;
  }


}
