import { Component } from '@angular/core';
import { GithubService } from '../services/github.services';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: `profile.component.html`,
})
export class ProfileComponent  { 
	// Property for user
	user:any[];
	repos:any[];
	
	constructor(private _githubService: GithubService){
		// Subscribe to GithubService
		this._githubService.getUser().subscribe(user => {
			this.user = user;
		});
		// Subscribe to GithubService
		this._githubService.getRepos().subscribe(repos => {
			this.repos = repos;
		});		
	}
}