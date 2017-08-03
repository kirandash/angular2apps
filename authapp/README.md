# Authapp

https://auth0.com

Dashboard - new client

npm install angular2-jwt --save (Helper library for auth0)

npm install auth0-lock --save (lock widget for login box)

# Routing

## 1. Create app.routing.ts file

import { Routes, RouterModule } from "@angular/router";

// Components to be used in the router
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";

export const appRoutes:Routes = [
	{ path: "", component: HomeComponent }, // When there is nothing passed in the url
	{ path: "movie/:id", component: ProfileComponent } // Routes parameter = id
]

## 2. Add routing to app.module.ts

import { RouterModule } from '@angular/router'; // Routing

import { appRoutes } from './app.routing';  // Routing

Add to imports

RouterModule.forRoot(appRoutes)  // Routing

## 3. Add router-outlet to app.component.html
<router-outlet></router-outlet>

## 4. Add router-link to anchor tag
routerLink="/"