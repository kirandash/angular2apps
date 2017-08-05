import { Injectable } from '@angular/core';
import { IActivity } from '../shared/activity.model';
import { SAVED_ACTIVITIES } from '../shared/activities';

@Injectable()
export class ActivityService {

  constructor() { }

  getActivities() : IActivity[] {
  	return SAVED_ACTIVITIES.slice(0); // return a copy of the original SAVED_ACTIVITIES array
  }

  getTotalActivities(allActivities: IActivity[]) {
  	return allActivities.length; // return the total number of activities
  }

  getTotalDistance(allActivities: IActivity[]) {
  	var totalDistance = 0;
  	for(var i =0; i < allActivities.length; i++){
  		totalDistance += allActivities[i].distance;
  	}
  	return totalDistance; // return the sum of all activities distance
  }

  getFirstDate(allActivities: IActivity[]) {
  	var earliestDate = new Date("01/01/9999");
  	for(var i=0; i < allActivities.length; i++) {
  		var currentDate = allActivities[i].date;
  		if(currentDate < earliestDate){
  			earliestDate = currentDate;
  		}
  	}
  	return earliestDate; // return the earliest date by bruteforcing
  }

}
