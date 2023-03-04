import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  ngOnInit(): void {
    AOS.init({
      once: true,
      debounceDelay: 200
    });
    console.log('Libary is', AOS);
    
    console.log('My Screenwidth is', window.innerWidth);
  }
}
