import { Injectable, OnInit } from '@angular/core';
import { LocalStoragedService } from '../local-storaged/local-storaged.service';
import { TodoModel } from '../models/todoModel';

@Injectable({
  providedIn: 'root'
})
export class PersistentService implements OnInit {

  items: TodoModel[];

  constructor(private localStoragedService: LocalStoragedService) {
    this.items = []
  }
  ngOnInit(): void {
    this.items = this.localStoragedService.getItem(LocalStoragedService.INPUT_TODOS)
  }

  getLocal() {
    return this.localStoragedService.getItem(LocalStoragedService.INPUT_TODOS);
  }

  setList(): TodoModel[] {
      return this.items = this.localStoragedService.getItem(LocalStoragedService.INPUT_TODOS);
  }

  addItem(newItem: TodoModel[]) {
    this.items = newItem;
    

  }


  updateList(updateList: TodoModel[]) {
    this.items = updateList
    this.localStoragedService.setItem(LocalStoragedService.INPUT_TODOS, updateList);
  }

  editItem(edit: TodoModel) {
    this.items.push(edit)
    this.localStoragedService.setItem(LocalStoragedService.INPUT_TODOS, this.items)
  }

}
