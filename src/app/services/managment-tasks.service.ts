import { Injectable } from '@angular/core';
import { TodoModel } from '../models/todoModel';

@Injectable({
  providedIn: 'root'
})
export class ManagmentTasksService {

  private _pending!:  TodoModel[];
  private _completed!:  TodoModel[];

  constructor() {
  }

  pending(listPending: TodoModel[] ){
    this._pending = listPending
  }

  completed(listCompleted: TodoModel[]){
    this._completed = listCompleted
  }

 getPending(){
    if(this._pending){
    return this._pending;
    }
    return null
  }

 getCompleted(){
    if(this._completed){
    return this._completed;
    }
    return null
  }

}
