import { ChangeDetectorRef, Component, OnInit  } from '@angular/core';
import { TodoData } from '../service/data/todo-data';
import { Router } from '@angular/router';
import { Todo as TodoModel } from '../list-todos/list-todos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo implements OnInit
{

  todoId : number = 0 ;
  todo: TodoModel | null = null;

  constructor(
    private todoService: TodoData,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  )
  {

  }

  ngOnInit() {
    this.todoService.getToDoDetails('Gaurav', this.todoId).subscribe({
      next: (response) => {
        console.log('Todo details fetched successfully:', response);
        this.todo = response;
        this.changeDetectorRef.detectChanges();
      }
    });
  }



  saveTodo(){
    alert("Save TODO");
  }
}
