import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.html',
  imports: [CommonModule, FormsModule, HighlightDirective],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {

  todos$: Observable<Todo[]>;
  newTodoTitle = '';

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.todos$;
  }

  addTodo() {
    this.todoService.addTodo(this.newTodoTitle);
    this.newTodoTitle = '';
  }

  toggle(todo: Todo) {
    this.todoService.toggleTodo(todo);
  }

  remove(id: number) {
    this.todoService.removeTodo(id);
  }

  trackById(_index: number, todo: Todo) {
    return todo.id;
  }
}
