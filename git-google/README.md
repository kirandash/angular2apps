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

### STEP 5: Display profile data with getProfileInfo in profile service

### STEP 6: Display repos with ngFor and getProfileRepos in profile service

### STEP 7: Search profile,

Import FormsModule in app.module.ts

search on keyup

### STEP 8: Making it ready for production

ng build --prod

Now the final files from dist folder can be hosted any where. Remember to change base href in index.html from / to /ui/git-google

Read More about Github API at:
https://developer.github.com/v3/