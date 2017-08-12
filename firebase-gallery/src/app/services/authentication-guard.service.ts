import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
  	this.user = afAuth.authState;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  	// RouterStateSnapshot shows the state of router at a particular instance
  	return this.user.map((auth) => {
  		if(!auth) {
  			this.router.navigateByUrl('/login');
  			return false;
  		}
  		return true;
  	}).take(1); // take only 1 instance
  }

}
