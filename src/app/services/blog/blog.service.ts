import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url = 'http://damp-harbor-08844.herokuapp.com/api/';

  constructor( public http: HttpClient ) {
  }

  getArticles(limit:boolean|number){
    return this.http.get( `${this.url}articles/${limit}` );
  }

  getArticle(id:number){
    return this.http.get( `${this.url}article/${id}` );
  }

  getCategories(){
    return this.http.get( `${this.url}categories` );
  }

  getTags(){
    return this.http.get( `${this.url}tags` );
  }

  getArticlesCategory(id:number){
    return this.http.get( `${this.url}category/${id}` );
  }

  getArticlesTag(id:number){
    return this.http.get( `${this.url}tag/${id}` );
  }

}
