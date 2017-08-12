import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../services/image.service';
import { GalleryImage } from '../models/galleryImage.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
  
  // app-gallery component is all about asking imageService to run the getImages function and get all the images
  images: Observable<GalleryImage[]>; // an observable of GalleryImage array

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  	this.images = this.imageService.getImages();
  }

  ngOnChanges() {
  	this.images = this.imageService.getImages();
  }

}
