import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Output()
  characterIndex: EventEmitter<string> = new EventEmitter();

  @Input()
  characterList: Character[] = [];

  onDeleteCharacter(id: string) {
    this.characterIndex.emit(id);
  }
}
