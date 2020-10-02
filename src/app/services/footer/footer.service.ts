import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor( public http: HttpClient ) {
  }

  getContacts(){
    return this.http.get(`assets/data/contact.json`);
  }

}
