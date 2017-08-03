import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt'; // To check if logged in or not

declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  
  // Configure auth0
  lock = new Auth0Lock('ixobgnEqB55sVkI3qu8nTRXvGHJaQOvH', 'kirandash.auth0.com', {}); // client key, domain, options array
  constructor() { 
  	// Add callback for lock 'authenticated' event
  	this.lock.on("authenticated", (authResult:any) => {
  		this.lock.getProfile(authResult.idToken, function(error:any, profile:any){
  			if(error){
  				throw new Error(error);
  			}
  			// Set Profile
  			localStorage.setItem('profile',JSON.stringify(profile));
  			// Set Token
  			localStorage.setItem('id_token',authResult.idToken);
  		});
  	});
  }

  public login() {
  	// Call the show method to display the widget
    this.lock.show();
  }

  public authenticated(){
  	return tokenNotExpired();
  }

  public logout() {
  	// Remove info from localstorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }  

}
