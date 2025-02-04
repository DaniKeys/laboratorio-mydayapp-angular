import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStoragedService } from 'src/app/local-storaged/local-storaged.service';
import { TodoModel } from 'src/app/models/todoModel';
import { ManagmentTasksService } from 'src/app/services/managment-tasks.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  listTodos: TodoModel[];
  completed: Record<string, boolean> = {};
  edit: boolean;
  sendId: string | null | undefined = "";
  todo!: TodoModel;

  constructor(private localstorage: LocalStoragedService,
              private managmentTasks: ManagmentTasksService,
              private router: Router,
              private route: ActivatedRoute) {

    if (this.localstorage.hasItem(LocalStoragedService.INPUT_TODOS)) {
      this.listTodos = this.localstorage.getItem(LocalStoragedService.INPUT_TODOS);
    } else {
      this.listTodos = [];
    }
    this.edit = false
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['newTodo']) {

        const newTodo: TodoModel = {
          title: params['newTodo'],
          completed: false,
          id: uuidv4()
        }
        this.listTodos.push(newTodo);
        this.localstorage.setItem(LocalStoragedService.INPUT_TODOS, this.listTodos);
        this.router.navigate(["home"]);
      }
    });
  }

  @Output()
  deleteTodo = new EventEmitter<string>();


  completedTodo(event: Event, index: number) {
    console.log(index)
    const checked = event.target as HTMLInputElement
    if (checked.checked) {
      this.listTodos[index].completed = true;
      this.completed = {
        checked: true
      }
      const listCompleted = this.listTodos.filter(task => task.completed === true);
      const listPending = this.listTodos.filter(task => task.completed === false);

      this.managmentTasks.pending(listCompleted);
      this.managmentTasks.completed(listCompleted);
    } else if (checked.checked === false) {
      this.listTodos[index].completed = false;
      this.completed = {
        unChecked: true
      }
    }
  }

  destroy(id?: string | null) {
    if (id) {
      this.deleteTodo.emit(id)
    }
  }


  editTodo(id?: string | null) {
    this.edit = true;
    if (id) {
      this.router.navigateByUrl(`/home/list/edit?id=${id}`);
    }
  }

  listEdit(listUpdate: TodoModel[]) {
    this.listTodos = [...this.listTodos];
  }

  close(close: boolean) {
    this.edit = close;
  }



}




