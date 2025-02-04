import { Component, OnInit } from '@angular/core';
import { ManagmentTasksService } from '../services/managment-tasks.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  private _pending!: number | null;
  private _completed!: number | null;

  constructor(private managmentTasks: ManagmentTasksService) {
  }



}
