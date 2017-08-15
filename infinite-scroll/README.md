# InfiniteScroll

Learn how to create firebase database. How to implement infinite scroll to your angular app

We will learn how to asynchronously combine multiple array Observables from AngularFire2, then display them in a component based on the user’s scroll position.

ng new infinite-scroll

1. Install infinite scroll module and import it in app module

npm install ngx-infinite-scroll --save

2. Install firebase and import it in app module
npm install --save firebase angularfire2

Change the Rules

{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}

3. Create service for iamge
ng g s image

4. Create Image list component ts
ng g c image-list

