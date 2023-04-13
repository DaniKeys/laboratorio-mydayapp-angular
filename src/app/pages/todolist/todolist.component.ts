import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStoragedService } from 'src/app/local-storaged/local-storaged.service';
import { TodoModel } from 'src/app/models/todoModel';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  listTodos: TodoModel[];
  completed: Record<string, boolean> = {};
  edit: boolean;
  sendId: string | null | undefined= "";

  constructor(private localstorage: LocalStoragedService,
              private router : Router,
              private route: ActivatedRoute) {
    this.listTodos = []
    this.edit= false
  }

  ngOnInit(): void {
  }

  @Input()
  set todos(todo: TodoModel) {
    this.listTodos.push(todo)
  }

  @Output()
  deleteTodo = new EventEmitter<string>();


  completedTodo(event: Event, index: number) {
    const checked = event.target as HTMLInputElement
    if (checked.checked) {
      this.listTodos[index].completed = true;
      this.completed = {
        checked: true
      }
    } else if (checked.checked===false) {
      this.listTodos[index].completed = false;
      this.completed = {
        unChecked: true
      }
    }
  }

  destroy(id?: string | null) {
    if(id){
    this.deleteTodo.emit(id)
    }
  }


  editTodo(id?: string | null) {
    this.edit = true;
    if(id ){
      this.router.navigateByUrl(`/home/list/edit?id=${id}`);
    }
  }

  listEdit(listUpdate: TodoModel[]){
      this.listTodos = listUpdate
  }


}




