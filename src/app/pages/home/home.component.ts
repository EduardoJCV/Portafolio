import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about/about.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public limit = 4;

  
  public limit2 = 6;

  about;

  constructor( public aboutService: AboutService ) {
    this.aboutService.getAbout().subscribe( (res:any)=>{
      this.about = res;
    });
  }

}
