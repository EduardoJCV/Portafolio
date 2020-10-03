import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  url = "https://damp-harbor-08844.herokuapp.com/api/project";

  constructor( public http: HttpClient ) {
  }

  getProjects(limit:boolean|number){
    return this.http.get( `${this.url}s/${limit}` );
  }

  getProject(id:number){
    return this.http.get( `${this.url}/${id}` );
  }


}
