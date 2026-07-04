import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username = "";
  password = "";
  errorMessage = "Invalid Credentials";
  invalidCredentials = false;
  attempted = false;

  constructor(
    private router: Router ,
    private authenticationService: AuthenticationService
  ) {
  }

  handleLogin() {
    this.attempted = true;
    console.log("Username : ", this.username);
    console.log("Password : ", this.password);

    if(this.authenticationService.authenticate(this.username, this.password)) {
      this.invalidCredentials = false;
      alert("Login Successful");
      this.router.navigate(['home', this.username]);
    } else {
      this.invalidCredentials = true;
    }
  }
}
