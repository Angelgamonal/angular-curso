import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return this.dbzService.characters;
  }

  addCharacter(character: Character) {
    this.dbzService.onNewCharacter(character);
  }

  deleteCharacterById(id: string) {
    this.dbzService.onDeleteCharacterById(id);
  }
}
