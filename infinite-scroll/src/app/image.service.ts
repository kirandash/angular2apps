import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

@Injectable()
export class ImageService {

  constructor(private db: AngularFireDatabase) { }

  getImages(group, endKey?) {
  	// Build the query to feed to firebase
    let query = {
  		orderByKey: true,
  		limitToFirst: group
  	}

    // If key is mentioned then the query will start from that key and then use the group number
  	if(endKey) query['startAt'] = endKey;

    // return the list of data from angular firebase data
  	return this.db.list('/uploads/', {
  		query
  	})
  }
}