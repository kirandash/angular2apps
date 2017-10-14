import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

/* BehaviorSubject is a type of subject, a subject is a special type of observable so you can subscribe to messages like any other observable but it also has some unique features like:

A BehaviorSubject needs an initial value as it must always return a value on subscription even if it hasn't received a next()
A BehaviorSubject Upon subscription returns the last value of the subject. But A regular observable only triggers when it receives an onnext.

https://stackoverflow.com/questions/39494058/behaviorsubject-vs-observable

*/

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Lodash is a toolkit of Javascript functions that provides clean, performant methods for manipulating objects and collections.
import * as _ from 'lodash';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {
  
  // All the images will be saved in a behaviorSubject
  images = new BehaviorSubject([]);

  // 3 Images to be loaded each time
  group = 3;
  endKey = ''; // Initially endKey will be null.
  finished = false; // Once all the images are loaded we will make finished true

  // Inject ImageService to constructor
  constructor(private _imageService: ImageService) { }

  ngOnInit() {
  	// Save some images in the beginning when the component is instantiated
    this.getImages();
  }

  onScroll() {
    // Once scrolled, get images one more time
  	console.log('scrolled and throttled!');
  	this.getImages();
  }

  private getImages(key?) {
    if(this.finished) return;

    //console.log(this.endKey);


    // asynchronously combine multiple array Observables from AngularFire2, then display them in a component based on the user’s scroll position
    this._imageService.
    	getImages(this.group+1, this.endKey) // Grab 1 extra image data and save its key
    	.do(images => {
    		this.endKey = _.last(images)['$key'] // update the key to last key of current set or BehaviorSubject saved so that the key can be used for next iteration

        console.log(images);

    		const newImages = _.slice(images, 0, this.group)

        console.log(newImages);

    		const currentImages = this.images.getValue(); // Get current value of BehaviorSubject

        console.log(currentImages);

    		if( this.endKey == _.last(newImages)['$key'] ) {
    			this.finished = true;
    		}

    		this.images.next(_.concat(currentImages, newImages));
        // console.log(_.last(newImages)['$key']);
    	})
    	.take(1) // take only one instance
    	.subscribe(); // subscribe to it

  }  

}
