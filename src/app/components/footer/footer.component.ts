import { Component } from '@angular/core';

import { FooterService } from './../../services/footer/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  contacts;

  constructor( public footerService:FooterService ) { 
    this.footerService.getContacts().subscribe( (res:any)=>{
      this.contacts = res;
    });
  }


}
