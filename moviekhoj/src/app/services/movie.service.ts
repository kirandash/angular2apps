import { Injectable } from '@angular/core'; // Import injectable to add dependency injection

// use jsonp package instead of just json - better security
import { Jsonp } from '@angular/http';
import 'rxjs/Rx'; //import reactive extension

@Injectable()
export class MovieService {
  apikey: string;
  
  constructor(private _jsonp: Jsonp) { 
  	this.apikey = '5a7f3263e577b104f411553bf574446b';
  	console.log('This service is initialized...');
  }
  
  getPopular() {
  	// Callback and API keys are important
  	return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey).map(res => res.json()); // map is used since it is going to be an observable
  }

  getIntheatres() {
  	return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-07-01&primary_release_date.lte=2017-08-30&api_key='+this.apikey).map(res => res.json());
  }

  searchMovies(searchStr: string) {
  	return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+ searchStr +'&sort_by=popularity.desc&api_key='+this.apikey).map(res => res.json());
  }
}
