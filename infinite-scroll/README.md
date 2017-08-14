# InfiniteScroll

ng new infinite-scroll

1. Install infinite scroll module and import it in app module

npm install ngx-infinite-scroll --save

2. Install firebase and import it in app module
npm install --save firebase angularfire2

3. Create service for iamge
ng g s image

Rules

{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}