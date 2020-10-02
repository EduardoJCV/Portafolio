import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {

  id;

  param;

  notFound = false;
  notFound404 = false;

  articles;

  constructor( public blogService: BlogService, private activateRoute:ActivatedRoute, public router:Router ) {

    this.activateRoute.params.subscribe( params =>{
      this.param = params['id'];
      this.initialiseState();
    });

   }

   initialiseState(){

    this.blogService.getArticlesTag(this.param).subscribe( (res:any)=>{
      this.articles = res;

      if( res == null || res == undefined ){
        this.notFound404 = true;
        return;
      }

      if( res.list == [] || res.list == false || res.list == null || res.list == undefined || res.list == {} ){
        this.notFound = true;
        return;
      }
    });
   }

   goArticle(id:number){
    this.router.navigateByUrl(`blog/articulo/${id}`);
  }


}
