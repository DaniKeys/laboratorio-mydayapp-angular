import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LocalStoragedService } from 'src/app/local-storaged/local-storaged.service';
import { TodoModel } from 'src/app/models/todoModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  showTodolist: boolean;
  newItem = new FormControl("",[Validators.required]);
  items: string[];

  constructor(private localStoragedService: LocalStoragedService) {
    this.showTodolist = false;
    this.items = []
  }

  ngOnInit(): void {
    this.items = this.localStoragedService.getItem(LocalStoragedService.INPUT_TODOS);
    if (this.items) {
      this.showTodolist = true;
    } else {
      this.showTodolist = false;
    }
  }

  sendValue() {
    if (!this.items) {
      this.items = [];
      }
    this.showTodolist = true;
    if(this.newItem.value){
      this.items.push(this.newItem.value);
      this.localStoragedService.setItem(LocalStoragedService.INPUT_TODOS,this.items);
      this.newItem.setValue("");
    }
    }
    


  }





