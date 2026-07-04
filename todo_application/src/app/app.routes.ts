import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Welcome } from './welcome/welcome';
import { Error } from './error/error';
import { ListTodos } from './list-todos/list-todos';
import {Logout} from './logout/logout';

export const routes: Routes = [
  { path:'',component:Login},
  { path: 'login', component: Login },
  { path: 'welcome/:name', component: Welcome },
  { path: 'home', component: Welcome },
  { path: 'home/:name', component: Welcome },
  { path: 'todos', component: ListTodos },
  { path: 'logout',component:Logout},
  { path: '**', component: Error }
];
