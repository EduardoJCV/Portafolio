import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from './../../services/blog/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent {

  @Input('limit')limit;

  items = [];

  articles;

  constructor( public blogService:BlogService, public router:Router ) { 
    setTimeout(() => {

      if (this.limit == undefined) {
        this.blogService.getArticles(false).subscribe( (res:any) =>{
          this.articles = res;
        });
      }
      else{
        this.blogService.getArticles(this.limit).subscribe( (res:any) =>{
          this.articles = res;
        });
      }

    }, 1000);
  }

  goArticle(id:number){
    this.router.navigateByUrl(`blog/articulo/${id}`);
  }

}
