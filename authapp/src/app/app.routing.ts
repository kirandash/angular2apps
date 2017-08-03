import { Routes, RouterModule } from "@angular/router";

// Components to be used in the router
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";

export const appRoutes:Routes = [
	{ path: "", component: HomeComponent }, // When there is nothing passed in the url
	{ path: "profile", component: ProfileComponent } // Routes parameter = id
]