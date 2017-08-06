import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'pm-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  
  handleError(error){
  	console.log(error);
  }

  handleSuccess(data){
  	this.imagesFound = true;
  	this.images = data.hits;
  	console.log(data.hits);
  }
  constructor(private _imageService : ImageService) { }

  searchImages(query: string) {
  	this.searching = true;
  	return this._imageService.getImage(query).subscribe(
  		/*data => console.log(data),
  		error => console.log(error),
  		() => console.log('Request complete!')*/ // anonymous function called after the searchImages fn is executed
  		data => this.handleSuccess(data),
  		error => this.handleError(error),
  		() => this.searching = false // to know if api is still searching or finished
  	);
  }

  ngOnInit() {
  }

}
