import { Component, OnInit } from '@angular/core';
// Accessing services by adding classes
import { Movie } from '../../classes/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  providers: [MoviesService] // add class to provider MoviesService
})
export class MoviesListComponent implements OnInit {
  
  // define variable
  movies: Movie[];

  // Inject MoviesService
  constructor(private moviesService: MoviesService) {

  }

  getMovies(): void { // returns void. nothing else
  	this.moviesService.getMovies().then(movies => this.movies = movies); // then fn used to retrieve data from promise.
  }

  // getMovies fn is called when class is instantiated
  ngOnInit() {
  	this.getMovies();
  }

}
