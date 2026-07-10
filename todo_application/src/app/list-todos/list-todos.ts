import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DatePipe , UpperCasePipe,LowerCasePipe, NgFor } from '@angular/common';
import { TodoData } from '../service/data/todo-data';

export class Todo{
  constructor(
    public todoId:number,
    public username:string,
    public description:string,
    public addedDate:Date,
    public targetDate:Date,
    public done:boolean
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

  // todos = [
  //   new Todo(1, 'Learn Programming', false, new Date()),
  //   new Todo(2, 'Become an Expert in Angular', false, new Date()),
  //   new Todo(3, 'Visit America', false, new Date())
  // ];

  todos: Todo[] = [];

  constructor(
    private todoService: TodoData,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log('Component initialized');
    this.todoService.getAllToDos('Gaurav').subscribe({
      next: (response) => {
        this.todos = response;
        console.log('Todos fetched successfully:', this.todos);
        this.changeDetectorRef.detectChanges();
      }
    });

  }
}
