import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../service/todo.service';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  todos: Todo[] = null;

  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {

this.getAll();
  }

  getAll(){
    this.todoService.getAll().subscribe(data => {
      this.todos = data;
    });
  }

  toggleTodo(i: number) {
    // @ts-ignore
    this.todos[i].complete = !this.todos[i].complete;
  }

  addNew() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todoService.addNew(todo);
      this.todos.push()
    }
  }

  deleteATodo(id: number) {
    this.todoService.delete(id);
  }
}
