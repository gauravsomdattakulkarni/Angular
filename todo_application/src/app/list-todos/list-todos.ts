import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
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
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}

  getTodos(){
    this.todoService.getAllToDos('Gaurav').subscribe({
      next: (response) => {
        this.todos = response;
        console.log('Todos fetched successfully:', this.todos);
        this.changeDetectorRef.detectChanges();
      }
    });
  }

  ngOnInit() {
    console.log('Component initialized');
    this.getTodos();

  }

  deleteTodo(todoId: number) {
    todoId = Number(todoId);
    if(confirm(`Are you sure you want to delete the todo with ID: ${todoId}?`)) {
      console.log("Deleting todo with ID:", todoId);
      this.todoService.deleteTodo('Gaurav', todoId).subscribe({
        next: (response) => {
          console.log('Todo deleted successfully:', response);
          this.getTodos();
          alert(`Todo with ID: ${todoId} has been deleted successfully.`);
        },
        error: (error) => {
          console.error('Error deleting todo:', error);
          alert("Some Issue Occurred while deleting the todo. Please try again later.");
        }
      });
    }else{
      console.log("Deletion cancelled for todo with ID:", todoId);
    }
  }

  editTodo(todoId : Number){
    //alert("Edit Todo");
    console.log("Edit Todo Id : " + todoId);
    this.router.navigate(['todos',todoId]);
  }
}
