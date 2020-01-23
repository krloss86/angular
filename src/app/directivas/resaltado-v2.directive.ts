import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPintado]'
})
export class ResaltadoV2Directive implements OnInit {

  @Input() appPintado: string;

  constructor(private render2: Renderer2, private el: ElementRef) {
  }

  ngOnInit() {
    const newColor = this.appPintado;
    this.render2.setStyle(this.el.nativeElement, 'background-color', newColor);
  }

}
