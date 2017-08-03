import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; // Routing

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';

import { appRoutes } from './app.routing';  // Routing

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule, 
    JsonpModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)  // Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
