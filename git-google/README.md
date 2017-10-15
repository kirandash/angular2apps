# GitGoogle

### STEP 1: Set up the project and get it up and running

ng new git-google --prefix gg

cd git-google

ng serve --- Project will be available at http://localhost:4200/

### STEP 2: Create github account and new OAuth App

Login ---> Settings ---> Developer Settings ---> Create OAuth app

### STEP 3: Create Profile component

mkdir components,   cd components,   ng g c profile,   

Check app.module.ts

Add profile selector <gg-profile></gg-profile> in app.component.html file

### STEP 4: Create profile Service

ng g s profile

import { Http, Headers } from '@angular/http'; 
import 'rxjs/add/operator/map';

Create ProfileService + Import http module in app.module.ts, Import service is app.module.ts and then in profile component ts