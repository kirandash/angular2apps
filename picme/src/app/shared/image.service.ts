import { Injectable } from '@angular/core';
// Get pixabay api key and url from environments variable
import { environment } from '../../environments/environment';
// Import HTTP and headers to request images from pixabay
import { Http, Headers } from '@angular/http';
// Map function from rxjs to map output of http observable
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {
  private query: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage: string = "&per_page=10";
  
  // Inject an instance of http
  constructor(private _http: Http) { }

  getImage(query) {
  	return this._http.get(this.URL + query + this.perPage).map(res => res.json());
  }
}
