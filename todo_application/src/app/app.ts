import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Welcome} from './welcome/welcome';
import { Login } from './login/login';
import { Menu } from './menu/menu';
import {Footer} from './footer/footer';
import {Logout} from './logout/logout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Welcome,
    Login,
    Menu,
    Footer,
    Logout
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "To Do Application";
  description = "Congratulations! Your app is running. 🎉"
}

