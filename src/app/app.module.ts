import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodolistComponent } from './pages/todolist/todolist.component';
import { TodoeditComponent } from './pages/todoedit/todoedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AllComponent } from './pages/all/all.component';
import { PendingComponent } from './pending/pending.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodolistComponent,
    TodoeditComponent,
    FooterComponent,
    AllComponent,
    PendingComponent,
    CompletedComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
