import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import {List} from '../list/list';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WelcomeData } from '../service/data/welcome-data';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome implements OnInit {
  name = "";
  messageWelcome = "";
  errorMessage = "";

  constructor(
    private route: ActivatedRoute,
    private welcomeData: WelcomeData,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }


  ngOnInit() {
    // alert("Welcome Component is loaded");
    console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
    this.changeDetectorRef.detectChanges();
  }

  getWelcomeMessage(){
    console.log("Please Wait Getting Message From Welcome Messanger.......");
    this.welcomeData.getWelcomeMessage().subscribe({
      next: response => this.handleSuccessfulResponse(response),
      error: error => this.HandleErrorResponse(error)}
    );
  }

  handleSuccessfulResponse(response:any){
    console.log("Welcome Message From Welcome Message Service Received");
    console.log(response);
    console.log("Response Is : " + response.message);
    console.log("Status Is : " + response.status);
    this.messageWelcome = response.message;
    this.changeDetectorRef.detectChanges();

  }

  HandleErrorResponse(error: any) {
    console.log(error);
    this.errorMessage = error.error.message;
    this.changeDetectorRef.detectChanges();

  }
}
