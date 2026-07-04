import { Component,OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';
import { AuthenticationService } from '../service/authentication-service';

@Component({
  selector: 'app-menu',
  imports: [RouterLink ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit{
  //userLoggedIn = false;
  constructor(
    public authenticationService:AuthenticationService
  ) {

  }

  ngOnInit(){
    // this.userLoggedIn = this.authenticationService.isUserLoggedIn();

  }
}
