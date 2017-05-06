import { Component } from '@angular/core';
import { GithubService } from '../services/github.services';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: `profile.component.html`,
})
export class ProfileComponent  { 
	// Property for user
	user:any;
	repos:any[];
	username:string;
	
	constructor(private _githubService: GithubService){
		// Subscribe to GithubService
		// Now this will be called when a search is performed
		/*this._githubService.getUser().subscribe(user => {
			this.user = user;
		});
		// Subscribe to GithubService
		this._githubService.getRepos().subscribe(repos => {
			this.repos = repos;
		});*/
		this.user = false; // default user state
	}

	searchUser() {
		this._githubService.updateUser(this.username);

		this._githubService.getUser().subscribe(user => {
			this.user = user;
		});
		// Subscribe to GithubService
		this._githubService.getRepos().subscribe(repos => {
			this.repos = repos;
		});	
	}
}