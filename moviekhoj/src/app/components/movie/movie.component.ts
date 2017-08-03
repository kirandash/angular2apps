import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service'; // Movie service
import { Router, ActivatedRoute } from '@angular/router'; // For routing

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Object;

  constructor(private _movieService: MovieService, private router: ActivatedRoute) { }

  ngOnInit() {
  	// this.movie = this._movieService.getMovie(+this.route.snapshot.params['id']);
  	this.router.params.subscribe((params) => {
  		let id = params['id'];
  		this._movieService.getMovie(id).subscribe(movie => {
  			// console.log(movie);
  			this.movie = movie;
  		});
  	});
  }

}
