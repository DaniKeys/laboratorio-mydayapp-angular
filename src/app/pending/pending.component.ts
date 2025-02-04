import { Component } from '@angular/core';
import { TodoModel } from 'src/app/models/todoModel';
import { ManagmentTasksService } from 'src/app/services/managment-tasks.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent {

  private _pending!: TodoModel[] | null;

  constructor(private managmentTasks: ManagmentTasksService){}

  get getPending() {
    return this._pending = this.managmentTasks.getPending();
}
}
