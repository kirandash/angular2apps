import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IActivity } from '../shared/activity.model';
import { MapService } from '../services/map.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rr-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  // Inject MapService
  constructor(private _mapService: MapService, private _route: ActivatedRoute) { }

  activity: any;
  activityName: string;
  activityComments: string;
  activityDate: Date;
  activityDistance: number;
  gpx: any;

  // When component is initialized we get the activity
  ngOnInit() {
  	this.activity = this._mapService.getActivity(
  		+this._route.snapshot.params['id']
  	)
  }

  // when view is ready we draw the map and assign the values to all the properties of this class
  ngAfterViewInit(){
    this._mapService.plotActivity(+this._route.snapshot.params['id']); // draw the map
    this.activityName = this.activity.name;
    this.activityComments = this.activity.comments;
    this.activityDistance = this.activity.distance;
    this.activityDate = this.activity.date;
    this.gpx = this.activity.gpxData;
  }

}
