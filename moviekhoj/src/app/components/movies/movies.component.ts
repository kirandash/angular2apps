import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  popularList:Array<Object>;
  theatresList:Array<Object>;
  searchStr:string;
  searchRes:Array<Object>;

  // Inject MovieService to MoviesComponent
  constructor(private _movieService: MovieService) { 
  		this._movieService.getPopular().subscribe(res=>{
  			this.popularList = res.results;
  			//console.log(this.popularList);
  		});

  		this._movieService.getIntheatres().subscribe(res=>{
  			this.theatresList = res.results;
  			//console.log(this.theatresList);
  		});
  }

  ngOnInit() {
  }

  searchMovies(){
  	// console.log(this.searchStr);
  	this._movieService.searchMovies(this.searchStr).subscribe(res => {
  		this.searchRes = res.results;
  	});
  }

}
