import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent {

  constructor(private elementRef: ElementRef) { }

  openSmartPhoneMenu(elementId: string, className: string) {
    const element = this.elementRef.nativeElement.querySelector(`#${elementId}`);
    element.classList.remove(className);
    element.classList.add('slideInRight');
  }
  
  closesmartphonemenu() {
    document.getElementById('mobile-menu-container').classList.add('d-none');
  }

  scroll(id: string) {
    document.getElementById(id).scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
}
