import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent {

  constructor(private elementRef: ElementRef) {}

  removeClassFromElementById(elementId: string, className: string) {
    const element = this.elementRef.nativeElement.querySelector(`#${elementId}`);
    element.classList.remove(className);
    element.classList.add('slideInRight');
  }
}
