import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  param;

  article;

  notFound = false;

  constructor( public blogService:BlogService, private activateRoute:ActivatedRoute, public router:Router ) {


    this.activateRoute.params.subscribe( params =>{
      this.param = params['id'];
      this.initialiseState();
    });


  }

  initialiseState(){

    this.blogService.getArticle(this.param).subscribe( (res:any)=>{
      this.article = res;

      if( res == undefined || res == null ){
        this.notFound = true;
      }
    });
  }

}
