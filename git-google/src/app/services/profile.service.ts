import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'; // Import Http and headers module since we will send an http request to github to get all profile details
import 'rxjs/add/operator/map'; // Responses will be returned as Observable which then will be used in component where we will subscribe to the observable and the related data will be shown


@Injectable()
export class ProfileService {
  
  private username:string;
  private clientid = 'a0d27b89b364c2cf9bb7';
  private clientsecret = 'c6e0d5d5a1fc838604f03c1599d20563daca8a18';
  
  
  constructor(private http: Http) { // Http is injected into constructor
  	console.log('Service is now ready');
  	this.username = 'kirandash';
  }

  getProfileInfo(){
  	return this.http.get("http://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  		.map(res => res.json()); // observable is returned
  }

  getProfileRepos(){
    return this.http.get("http://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .map(res => res.json()); // observable is returned
  }

}
