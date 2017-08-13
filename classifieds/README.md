# Classifieds

1. ng new classifieds --prefix cf

2. Add firebase details to environment.ts and environment.prod.ts

3. app.module.ts 
		import { ReactiveFormsModule } from '@angular/forms';
		Add ReactiveFormsModule to imports

4. Create Class 

	export class ClassifiedListing {
		title = 'Classified Title';
		content = 'Classified Content';
		price = 200.0;
		image = 'http://via.placeholder.com/450x350';
	}

5. Create classified service
	npm install --save firebase angularfire2
	create createClassified and updateClassified methods

6. Create Classified list  component



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
