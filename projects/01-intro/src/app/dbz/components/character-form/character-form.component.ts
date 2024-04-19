import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-character-form',
  templateUrl: './character-form.component.html',
})
export class CharacterFormComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  formData: Character = { name: '', power: 0, id: '' };

  savedFormdata() {
    if (this.formData.name.trim().length === 0) return;

    this.onNewCharacter.emit(this.formData);

    this.formData = { name: '', power: 0, id: '' };
  }
}
