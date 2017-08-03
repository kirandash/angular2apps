import { Component, OnInit } from '@angular/core';
// Accessing services by adding classes
import { Character } from '../../classes/character';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  providers: [CharactersService] // add class to provider MoviesService
})
export class CharactersListComponent implements OnInit {

  // define variable
  characters: Character[];

  // Inject CharactersService
  constructor(private charactersService: CharactersService) {

  }

  getCharacters(): void { // returns void. nothing else
  	this.charactersService.getCharacters().then(characters => this.characters = characters); // then fn used to retrieve data from promise.
  }

  // getCharacters fn is called when class is instantiated
  ngOnInit() {
  	this.getCharacters();
  }

}
