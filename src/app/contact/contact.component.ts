import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  ngOnInit(): void {
  }

  scroll(id: string) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
}
