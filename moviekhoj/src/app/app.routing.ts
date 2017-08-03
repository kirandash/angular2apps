import { Routes, RouterModule } from "@angular/router";

// Components to be used in the router
import { MoviesComponent } from "./components/movies/movies.component";
import { MovieComponent } from "./components/movie/movie.component";

export const appRoutes:Routes = [
	{ path: "", component: MoviesComponent }, // When there is nothing passed in the url
	{ path: "movie/:id", component: MovieComponent } // Routes parameter = id
]