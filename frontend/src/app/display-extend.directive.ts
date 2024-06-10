import {Directive, ElementRef, HostListener, Input, Renderer2, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appDisplayExtend]'
})
export class DisplayExtendDirective implements OnChanges {

  @Input()
  defaultDisplay = 'extended-hide';

  @Input()
  extendDisplay = 'extended-show';

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.setDisplay(this.defaultDisplay);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setDisplay(this.defaultDisplay);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setDisplay(this.extendDisplay);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setDisplay(this.defaultDisplay);
  }

  setDisplay(type: string) {
    const classesToRemove = Array.from((this.element.nativeElement as HTMLElement).classList).filter(c => c.startsWith('extended'));
    classesToRemove.forEach((c) => {
      this.renderer.removeClass(this.element.nativeElement, c);
    });

    const newClass = type;
    this.renderer.addClass(this.element.nativeElement, newClass);
  }

}
