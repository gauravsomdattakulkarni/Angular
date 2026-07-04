import { Component, OnInit } from '@angular/core';
import { RouterLink} from '@angular/router';
import {AuthenticationService} from '../service/authentication-service';
@Component({
  selector: 'app-logout',
  imports: [RouterLink],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout implements OnInit
{

  constructor(
    private authenticationService:AuthenticationService
  ) {

  }

  ngOnInit(){
    this.authenticationService.logout();
  }
}
