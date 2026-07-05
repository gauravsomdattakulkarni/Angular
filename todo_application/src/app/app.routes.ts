import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Welcome } from './welcome/welcome';
import { Error } from './error/error';
import { ListTodos } from './list-todos/list-todos';
import {Logout} from './logout/logout';
import { RouteGuard } from './service/route-guard';

export const routes: Routes = [
  { path:'',component:Login},
  { path: 'login', component: Login },
  { path: 'welcome/:name', component: Welcome , canActivate:[RouteGuard]},
  { path: 'home', component: Welcome ,canActivate:[RouteGuard]},
  { path: 'home/:name', component: Welcome , canActivate:[RouteGuard]},
  { path: 'todos', component: ListTodos , canActivate:[RouteGuard]},
  { path: 'logout',component:Logout, canActivate:[RouteGuard]},
  { path: '**', component: Error }
];
