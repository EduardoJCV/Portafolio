import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  contact = [
      {
          "id": 1,
          "name":"Github",
          "icon":"fab fa-github",
          "url": "https://github.com/EduardoJCV"
      },
      {
          "id": 2,
          "name":"LinkedIn",
          "icon":"fab fa-linkedin",
          "url": "https://www.linkedin.com/in/eduardojcv/"
      },
      {
          "id": 3,
          "name":"EduardoJCV#2721",
          "icon":"fab fa-discord",
          "url": ""
      }
  ];


  constructor( public http: HttpClient ) {
  }

  getContacts(){
    return this.contact;
  }

}
