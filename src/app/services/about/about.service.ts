import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  url = 'http://damp-harbor-08844.herokuapp.com/api/about';

  constructor( public http: HttpClient ) {
  }

  getAbout(){
    return this.http.get( this.url );
  }

}
