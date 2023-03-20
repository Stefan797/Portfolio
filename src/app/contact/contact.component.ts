import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

    const formData = new FormData();
    
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);
   

    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });

    this.http.post('https://stefanhuebner97.de/SendMail/send_mail.php', formData, { headers: headers }).subscribe((result)=> {
      console.log('result', result);
    });
  }
  
}
