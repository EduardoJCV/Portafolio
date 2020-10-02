import { Component } from '@angular/core';

import { AboutService } from './../../services/about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  about;

  constructor( public aboutService: AboutService ) {
    this.aboutService.getAbout().subscribe( (res:any)=>{
      this.about = res;
    });
  }

}
