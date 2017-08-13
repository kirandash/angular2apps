import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { ClassifiedListing } from '../classes/classified-listing';

@Injectable()
export class ClassifiedService {

  constructor(private afdb: AngularFireDatabase) { }

  // Create Classified and then return an object
  createClassified(): FirebaseObjectObservable<ClassifiedListing> {
  	const classifiedDefault = new ClassifiedListing();
  	const classifiedKey = this.afdb.list('/classifieds').push(classifiedDefault).key;
  	return this.afdb.object('/classifieds/' + classifiedKey);
  }

  // Update an existing classified
  updateClassified(classified: FirebaseObjectObservable<ClassifiedListing>, data: any) {
  	return classified.update(data);
  }

}
