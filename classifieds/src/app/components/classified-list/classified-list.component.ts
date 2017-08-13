import { Component, OnInit } from '@angular/core';
import { ClassifiedListing } from '../../classes/classified-listing';
import { ClassifiedService } from '../../services/classified.service';

import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'cf-classified-list',
  templateUrl: './classified-list.component.html',
  styleUrls: ['./classified-list.component.css']
})

export class ClassifiedListComponent implements OnInit {
  
  classified: any;
  classifiedForm: FormGroup;

  constructor(private classifiedService: ClassifiedService, private _fb: FormBuilder) { }

  ngOnInit() {
  }

  // Save the default data to firebase and initialize the reactive form.
  initClassifiedListing() {
  	this.classified = this.classifiedService.createClassified();
  	this.createForm();
  }

  //  update database in Firebase when there is a change of data in the form and if the data is valid
  updateClassifiedChanges() {
  	if(this.classifiedForm.status != 'VALID'){
  		console.log('Data could not be saved to database. Since the form is not valid!');
  		return;
  	}

  	const data = this.classifiedForm.value;
  	this.classifiedService.updateClassified(this.classified, data);
  }

  //  will mirror the structure of our data and it is where validation rules are defined. It will then subscribe to the database object and update the form with existing realtime values.
  private createForm() {
  	this.classifiedForm = this._fb.group({
      title:    ['', Validators.required ],
      content:  ['', Validators.required ],
      price:    ['', Validators.required ],
      image:    ['', Validators.required ]
  	});

  	this.classified.subscribe(classified => {
  		this.classifiedForm.patchValue(classified)
  	})
  }

}
