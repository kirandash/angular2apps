import { Injectable } from '@angular/core';

// Import environment variables
import { environment } from '../../environments/environment';

// Import activity interface
import { IActivity } from '../shared/activity.model';
// Import ActivityService
import { ActivityService } from '../services/activity.service';
// Import all activities data
import { SAVED_ACTIVITIES } from '../shared/activities';

var apiToken = environment.MAPBOX_API_KEY;
declare var omnivore: any; // Omnivore
declare var L: any; // Leaflet

const defaultCoords: number[] = [40, -80]
const defaultZoom: number = 8

@Injectable()
export class MapService {
  
  constructor() { }
  
  getActivity(id: number) {
  	return SAVED_ACTIVITIES.slice(0).find(run => run.id == id);// make a copy of the original data array and find the id
  }

  plotActivity(id: number){
    // style for map
    var myStyle = {
      "color": "#3949AB",
      "weight": 5,
      "opacity": 0.95
    };

    // Leaflet(L) is used to call map on a div with id map and set its view to default coordinates and zoomlevel
    var map = L.map('map').setView(defaultCoords, defaultZoom);

    // set maximum zool layer
    map.maxZoom = 100;

    // layer on top of map to show images on map - by mapbox to leaflet
    L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.pencil', // dark, pencil, etc - mapbox styles
      accessToken: apiToken
    }).addTo(map);

    var customLayer = L.geoJson(null, {
      style: myStyle
    });

    // Leaflet by default accepts only geoJson data. omnivore converts gpx into geoJson
    var gpxLayer = omnivore.gpx(SAVED_ACTIVITIES.slice(0).find(run => run.id == id).gpxData, null, customLayer)
    .on('ready', function() {
      map.fitBounds(gpxLayer.getBounds()); // when gpxlayer is ready set the map bounds or say the zoom level 
    }).addTo(map);
    // get current gpxdata from SAVED_ACTIVITIES array data and set gpx layer via omnivore
  }

}