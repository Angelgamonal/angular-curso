import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  characters: Character[] = [
    { name: 'krilin', power: 500, id: uuid() },
    { name: 'goku', power: 10000, id: uuid() },
    { name: 'vegeta', power: 9000, id: uuid() },
  ];

  onNewCharacter(character: Character): void {
    this.characters = [...this.characters, { ...character, id: uuid() }];
  }

  onDeleteCharacterById(id: string) {
    this.characters = this.characters.filter((item) => item.id !== id);
  }
}
