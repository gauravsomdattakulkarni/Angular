import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos';


@Injectable({
  providedIn: 'root',
})
export class TodoData {
  constructor(
    private http: HttpClient
  ){
  }

  getAllToDos(name: string) {
      return this.http.get<Todo[]>(`http://localhost:8081/users/${name}/todos`);
  }

  deleteTodo(name: string, todoId: number) {
    return this.http.delete(`http://localhost:8081/users/${name}/todos/${todoId}`);
  }

  getToDoDetails(name: string, todoId: number) {
    return this.http.get<Todo>(`http://localhost:8081/users/${name}/todos/${todoId}`);
  }
}
