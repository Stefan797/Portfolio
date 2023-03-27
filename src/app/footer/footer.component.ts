import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  scroll(id: string){
    document.getElementById(id).scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
}
