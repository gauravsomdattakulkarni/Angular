import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import {List} from '../list/list';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WelcomeData } from '../service/data/welcome-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome implements OnInit {
  name = "";
  messageWelcome = "";
  errorMessage = "";
  user_name = "";

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
    this.messageWelcome = "";
  }

  getWelcomeMessage(){
    console.log("Please Wait Getting Message From Welcome Messanger.......");
    this.welcomeData.getWelcomeMessage().subscribe({
      next: response => this.handleSuccessfulResponse(response),
      error: error => this.HandleErrorResponse(error)}
    );
  }

  getWelcomeMessageWithParameter(){
    console.log("Please Wait Getting Message From Welcome Messanger.......");
    this.welcomeData.getWelcomeMessageWithParameter(this.user_name).subscribe({
      next: response => this.handleSuccessfulResponse(response),
      error: error => this.HandleErrorResponse(error)}
    );
  }

  handleSuccessfulResponse(response:any){
    this.messageWelcome = "";
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
