import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // Define properties
  profile:any;
  repos:any[];
  username:string;

  constructor(private profileService: ProfileService) {
  	/*this.profileService.getProfileInfo().subscribe( profile => {
  		console.log(profile); // return all the infor for the username
      this.profile = profile;
  	} ); // subscribe to the observable being returned

    this.profileService.getProfileRepos().subscribe( repos => {
      console.log(repos); // return all the infor for the username
      this.repos = repos;
    } ); // subscribe to the observable being returned*/
  }

  findProfile(){
    this.profileService.updateProfile(this.username);

    this.profileService.getProfileInfo().subscribe( profile => {
      console.log(profile); // return all the infor for the username
      this.profile = profile;
    } ); // subscribe to the observable being returned

    this.profileService.getProfileRepos().subscribe( repos => {
      console.log(repos); // return all the infor for the username
      this.repos = repos;
    } ); // subscribe to the observable being returned    
  }

  ngOnInit() {
  }

}
