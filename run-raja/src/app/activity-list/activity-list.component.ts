import { Component, OnInit } from '@angular/core';
import { IActivity } from '../shared/activity.model';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'rr-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  
  // Declare properties for activity list item
  activities: IActivity[];
  totalActivities: number;
  totalDistance: number;
  firstDate: Date;

  // Inject activity service to our constructor
  constructor(private _activityService : ActivityService) { }

  // On initialized, instantiate 
  ngOnInit() {
  	this.activities = this._activityService.getActivities(); // return all the objects of activities collection
  	this.totalActivities = this._activityService.getTotalActivities(this.activities); // return datas related to the activities collection
  	this.totalDistance = this._activityService.getTotalDistance(this.activities);
  	this.firstDate = this._activityService.getFirstDate(this.activities);
  }

}
