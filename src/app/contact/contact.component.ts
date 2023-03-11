import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  

  constructor( private http:HttpClient ) {}

  ngOnInit(): void {
  }

  scroll(id: string) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  }

  onSubmit(data) {
    this.http.post('https://stefanhuebner97.de/SendMail/send_mail.php', data)
    .subscribe((result)=> {
      console.log('result', result);
    });
  }
  
}
