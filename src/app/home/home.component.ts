import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStoragedService } from 'src/app/local-storaged/local-storaged.service';
import { TodoModel } from 'src/app/models/todoModel';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  showTodolist: boolean;
  newItem = new FormControl("", [Validators.required]);
  // items: TodoModel[];


  constructor(private localStoragedService: LocalStoragedService,
    private router: Router) {
    this.showTodolist = false;

  }


  ngOnInit(): void {

    if (this.localStoragedService.hasItem(LocalStoragedService.INPUT_TODOS)) {
      this.showTodolist = true
    } else {
      this.localStoragedService.clear();
      this.showTodolist = false
    }
  }

  sendValue() {
    this.showTodolist = true;
    if (this.newItem.value) {
      this.router.navigateByUrl(`/home/list?newTodo=${this.newItem.value}`);
      this.newItem.setValue("");
    }

  }

  // deletedTodo(id: string) {
  //   let collect = this.items.filter(todo => todo.id !== id);
  //   this.items = collect;
  //   this.localStoragedService.setItem(LocalStoragedService.INPUT_TODOS, collect);
  // }

  // updateTitle(title: string) {
  //   let update = this.items.filter(todo => todo.title)
  // }


}





