import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRoute , ActivatedRouteSnapshot , RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication-service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuard implements CanActivate {
  constructor(
    public authenticationService:AuthenticationService,
    public router:Router
  ) {}

  canActivate(route:ActivatedRouteSnapshot , state:RouterStateSnapshot) {
    if(this.authenticationService.isUserLoggedIn()){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }

  }

}
