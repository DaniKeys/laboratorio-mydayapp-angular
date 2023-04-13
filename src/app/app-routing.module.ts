import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TodoeditComponent } from './pages/todoedit/todoedit.component';
import { TodolistComponent } from './pages/todolist/todolist.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [

      {
        path: 'list',
        component: TodolistComponent,
        children: [

          {
            path: 'edit',
            component: TodoeditComponent,

          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
