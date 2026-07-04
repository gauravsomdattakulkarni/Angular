import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  authenticate(username:string , password:string) {
    console.log("Before Authentication : " + this.isUserLoggedIn());
    if(username === 'admin' && password === '123') {
      sessionStorage.setItem('authenticatedUser', username);
      console.log("After Authentication : " + this.isUserLoggedIn());
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    if(user==null){
      return false;
    }else{
      return true;
    }
  }

  logout(){
    try{
      sessionStorage.removeItem('authenticatedUser');
      return true;
    }catch(e){
      console.log("Error while logging out : ",e);
      return false;
    }

  }
}
