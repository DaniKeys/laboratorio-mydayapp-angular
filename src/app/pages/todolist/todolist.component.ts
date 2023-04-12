import { Component, Input, OnInit } from '@angular/core';
import { LocalStoragedService } from 'src/app/local-storaged/local-storaged.service';
import { TodoModel } from 'src/app/models/todoModel';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  listTodos: TodoModel[];
  edit: boolean;
  completed: Record<string, boolean> = {};

  constructor(private localstorage: LocalStoragedService) {
    this.listTodos = []
    this.edit = false
  }

  ngOnInit(): void {
  }

  @Input()
  set todos(todo: string) {
    this.listTodos.push({
      title: todo,
      completed: false
    })
  }

  completedTodo(event: Event, index: number) {
    const checked = event.target as HTMLInputElement
    if (checked.checked) {
      this.listTodos[index].completed = true;
      this.completed = {
        checked: true
      }
    } else if (!checked.checked) {
      this.listTodos[index].completed = false;
      this.completed = {
        unChecked: true
      }
    }
  }

  destroy(index: number) {
    this.listTodos.splice(index, 1)
    let listStoraged = this.localstorage.getItem(LocalStoragedService.INPUT_TODOS);
    listStoraged.splice(index, 1);
    this.localstorage.setItem(LocalStoragedService.INPUT_TODOS,listStoraged);
  }

  editTodo() {
    this.edit = true;
  }



}




