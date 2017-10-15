import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { 
  	this.profileService.getProfileInfo().subscribe( profile => {
  		console.log(profile); // return all the infor for the username
  	} ); // subscribe to the observable being returned
  }

  ngOnInit() {
  }

}
