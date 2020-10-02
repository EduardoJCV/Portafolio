import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

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

    this.blogService.getArticlesCategory(this.param).subscribe( (res:any)=>{
      this.articles = res;

      res.list.splice(0,1);

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
