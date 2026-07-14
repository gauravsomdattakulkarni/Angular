import { ChangeDetectorRef, Component, OnInit  } from '@angular/core';
import { TodoData } from '../service/data/todo-data';
import { Router } from '@angular/router';
import { Todo as TodoModel } from '../list-todos/list-todos';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo implements OnInit
{

  todoId : number = 0 ;
  todoDetails: TodoModel ;

  constructor(
    private todoService: TodoData,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private route : ActivatedRoute
  )
  {
    this.todoDetails = new TodoModel(0, '', '', new Date(), new Date(), false) ;
  }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['todoId'];
    console.log("TODO ID : " + this.todoId);

    this.todoService.getToDoDetails('Gaurav', this.todoId).subscribe({
      next: (response) => {
        console.log('Todo details fetched successfully:', response);
        this.todoDetails = response;

        this.changeDetectorRef.detectChanges();
      }
    });
  }



  saveTodo(){
    alert("Save TODO");
  }
}
