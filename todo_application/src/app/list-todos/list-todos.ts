import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DatePipe , UpperCasePipe,LowerCasePipe, NgFor } from '@angular/common';

export class Todo{
  constructor(
    public todo_id:number,
    public description:string,
    public done:boolean,
    public target_date:Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive , DatePipe, UpperCasePipe],
  templateUrl: './list-todos.html',
  styleUrl: './list-todos.css',
})
export class ListTodos implements OnInit {

  todos = [
    new Todo(1, 'Learn Programming', false, new Date()),
    new Todo(2, 'Become an Expert in Angular', false, new Date()),
    new Todo(3, 'Visit America', false, new Date())
  ];

  constructor() {}

  ngOnInit() {
    console.log('Component initialized');
  }
}
