import { Component } from '@angular/core';

@Component({
  selector: 'app-abovethefold',
  templateUrl: './abovethefold.component.html',
  styleUrls: ['./abovethefold.component.scss']
})
export class AbovethefoldComponent {
  scroll(id: string){
    document.getElementById(id).scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
}
