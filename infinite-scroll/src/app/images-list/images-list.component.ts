import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {
  
  images = new BehaviorSubject([]);

  group = 2;
  endKey = '';
  finished = false;

  constructor(private _imageService: ImageService) { }

  ngOnInit() {
  	// Save some images in the beginning
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
    		this.endKey = _.last(images)['$key'] // last key of current set or BehaviorSubject
    		const newImages = _.slice(images, 0, this.group)

        // console.log(newImages);

    		const currentImages = this.images.getValue(); // Get current value of BehaviorSubject

        // console.log(currentImages);

    		if( this.endKey == _.last(newImages)['$key'] ) {
    			this.finished = true;
    		}

    		this.images.next(_.concat(currentImages, newImages));
        // console.log(_.last(newImages)['$key']);
    	})
    	.take(1)
    	.subscribe();

  }  

}
