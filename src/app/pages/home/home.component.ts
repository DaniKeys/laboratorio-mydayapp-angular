import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LocalStoragedService } from 'src/app/local-storaged/local-storaged.service';
import { TodoModel } from 'src/app/models/todoModel';
import { PersistentService } from 'src/app/persistent/persistentService';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  showTodolist: boolean;
  newItem = new FormControl("", [Validators.required]);
  items: TodoModel[];


  constructor(private localStoragedService: LocalStoragedService,
              private persistentService: PersistentService) {
    this.showTodolist = false;
    this.items=[]

  }


  ngOnInit(): void {

    if (this.localStoragedService.getItem(LocalStoragedService.INPUT_TODOS) === null ) {
      this.localStoragedService.clear();
      this.showTodolist = false;
    } else if (this.localStoragedService.getItem(LocalStoragedService.INPUT_TODOS)) {
      this.persistentService.setList()
      this.items = this.localStoragedService.getItem(LocalStoragedService.INPUT_TODOS);
      this.showTodolist = true;
    }
  }

  sendValue() {
    this.showTodolist = true;
    if (this.newItem.value) {
      this.items.push({
        id: uuidv4(),
        title: this.newItem.value,
        completed: false
      })
      this.localStoragedService.setItem(LocalStoragedService.INPUT_TODOS, this.items);
      this.newItem.setValue("");
    }

  }

  deletedTodo(id: string){
    let collect = this.items.filter(todo => todo.id !== id);
    this.items = collect;
    this.localStoragedService.setItem(LocalStoragedService.INPUT_TODOS, collect);
  }

  updateTitle(title: string){
    let update = this.items.filter(todo => todo.title)
  }


}





