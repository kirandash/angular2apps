# Angular4

ng new angular4 --prefix ag

ng serve

ng g component movies-list

ng g c characters-list

When angular runs first app-root is bootstrapped from index.html file which then goes to main.js file and the bootstrapModule function is called with AppModule parameter which then takes us to app.module.ts file.

# Components
Components are significant building blocks of angular architecture. Applications are composed with components.

Component holds the data + logic and provide visual structure.

Parent - Child hierarchy

# Routing

Secured routing, Routing tells which component to be viewed.

Not a part of angular core. But a part of router module. @angular/router

1. app.module.ts

# Service

A discrete unit of functionality (functions & capabilities)

Provided by dependency injection. A service is always at the application level as a singleton means it's logic is always same for the entire app. It is then injected to a component by providing a reference.

ng g class movie

ng g class character