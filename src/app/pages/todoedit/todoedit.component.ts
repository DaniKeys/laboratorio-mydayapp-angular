import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, LOCALE_ID, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { LocalStoragedService } from 'src/app/local-storaged/local-storaged.service';
import { TodoModel } from 'src/app/models/todoModel';

@Component({
  selector: 'app-todoedit',
  templateUrl: './todoedit.component.html',
  styleUrls: ['./todoedit.component.css']
})
export class TodoeditComponent implements OnInit {


  editTitle = new FormControl("");
  private list: TodoModel[];
  idTodo: string;

  @Output()
  listUpdate = new EventEmitter<TodoModel[]>();

  @Output()
  edit = new EventEmitter<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localStoragedService: LocalStoragedService) {

    this.list = []
    this.idTodo =""
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idTodo = params['id'];
      this.list = this.localStoragedService.getItem(LocalStoragedService.INPUT_TODOS);
      let todo = this.list.filter(todo => todo.id === this.idTodo)[0]
      if (todo) {
        let title = todo.title as string;
        this.editTitle.setValue(title);
      }
    });
  }


  update() {
    let indice = this.list.findIndex(t => t.id === this.idTodo);
    this.list[indice].title = this.editTitle.value;
    this.localStoragedService.setItem(LocalStoragedService.INPUT_TODOS, this.list)
    this.listUpdate.emit(this.list)
    this.router.navigate(['home/list'])
    this.edit.emit(false)
  }
}
