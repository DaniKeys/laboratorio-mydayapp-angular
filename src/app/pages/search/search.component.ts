import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStoragedService } from 'src/app/local-storaged/local-storaged.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

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
}
