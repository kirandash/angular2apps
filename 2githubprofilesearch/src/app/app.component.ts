import { Component } from '@angular/core';
import { GithubService } from './services/github.services';

@Component({
  selector: 'my-app',
  template: `<profile></profile>`,
  providers: [GithubService]
})
export class AppComponent  { }