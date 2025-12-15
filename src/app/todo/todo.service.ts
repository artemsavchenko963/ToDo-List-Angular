import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [];

  private todosSubject = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject.asObservable();

  addTodo(title: string) {
    const newTodo: Todo = {
      id: Date.now(),
      title: title,
      completed: false
    };

    this.todos.push(newTodo);
    this.todosSubject.next(this.todos);
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
    this.todosSubject.next(this.todos);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.todosSubject.next(this.todos);
  }
}
