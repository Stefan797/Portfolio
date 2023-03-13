import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent {

  constructor(private elementRef: ElementRef) { }

  removeClassFromElementById(elementId: string, className: string) {
    const element = this.elementRef.nativeElement.querySelector(`#${elementId}`);
    element.classList.remove(className);
    element.classList.add('slideInRight');
  }


  closesmartphonemenu() {
    document.getElementById('mobile-menu-container').classList.add('d-none');
    // return new Promise((resolve) => {
    //   const menuContainer = document.getElementById('mobile-menu-container');
    //   menuContainer.addEventListener('animationend', () => {
    //     menuContainer.classList.add('d-none');
    //     //resolve();
    //   }, { once: true });
    //   this.closenenuanimation();
    // });
  }

  // closenenuanimation() {
  //   const menuContainer = document.getElementById('mobile-menu-container');
  //   menuContainer.classList.add('slideOutRight');
  // }

  scroll(id: string) {
    document.getElementById(id).scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
  
  disable() {
    document.getElementById('mobile-menu-container').classList.add('d-none');
  }

}
