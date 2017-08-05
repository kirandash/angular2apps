// Import Routes from router module
import { Routes } from '@angular/router';

// Import views to be used for router outlet
import { ActivityListComponent } from "./app/activity-list/activity-list.component";

import { MapComponent } from "./app/map/map.component";

// a constant of type routes with an array of paths
export const appRoutes: Routes = [
	{ path: "runs", component: ActivityListComponent },
	{ path: "run/:id", component: MapComponent },
	{ path: "", redirectTo: "/runs", pathMatch: 'full' }
]