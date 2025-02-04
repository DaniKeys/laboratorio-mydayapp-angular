import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PendingComponent } from './pending/pending.component';
import { TodoeditComponent } from './pages/todoedit/todoedit.component';
import { TodolistComponent } from './pages/todolist/todolist.component';
import { FooterComponent } from './footer/footer.component';

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

          },

        ]
      }
    ]
  },
  {
    path: 'pending',
    component: PendingComponent

  },
  {
    path: 'footer',
    component: FooterComponent

  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
