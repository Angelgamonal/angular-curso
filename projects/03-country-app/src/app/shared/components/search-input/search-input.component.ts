import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  templateUrl: './search-input.component.html',
  selector: 'shared-search-input',
})
export class SearchInputComponent {
  @Output()
  inputValue: EventEmitter<string> = new EventEmitter();

  @Input()
  placeholder: string = '';

  onValueInput(value: string) {
    this.inputValue.emit(value);
  }

  onSubmit(event: Event, value: string) {
    event.preventDefault();

    if (value.trim().length === 0) return;

    this.onValueInput(value);
  }
}
