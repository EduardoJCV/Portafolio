import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = 'https://damp-harbor-08844.herokuapp.com/api/message/store';

  constructor( public http: HttpClient ) {}

  newMessage( msg:any ){

    return this.http.post( `${this.url}`, msg );

  }

}
