import { Injectable } from '@angular/core';
import { CanActivate, Router , ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor( private authService: AuthService, private router: Router ){}

  canActivate(){

    if(this.authService.getCurrentAdmin()){

      return true;
    }else{
      this.router.navigate(['/admin']);
      return false;
    }

  }
  
}
