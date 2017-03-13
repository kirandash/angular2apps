import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
    private jbtHeading:string;
    private jbtText:string;
    private jbtBtnText:string;
    private jbtBtnUrl:string;

    constructor() {
    	this.jbtHeading = "Hello World!";
    	this.jbtText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id lobortis eros. Phasellus maximus et velit in ultricies.";
    	this.jbtBtnText = "Read More";
    	this.jbtBtnUrl = "/about";
    }
}
