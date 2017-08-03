import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent, // Components declared here are added to the root level context of the app which means it can be accessed by any other component
    CharactersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
