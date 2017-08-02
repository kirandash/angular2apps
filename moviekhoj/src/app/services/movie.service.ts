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
}
