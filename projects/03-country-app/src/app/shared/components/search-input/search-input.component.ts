import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  templateUrl: './search-input.component.html',
  selector: 'shared-search-input',
})
export class SearchInputComponent implements OnInit {
  private debouncer: Subject<string> = new Subject<string>();

  @Input()
  placeholder: string = '';

  @Input()
  initialValue = '';

  @Output()
  inputValue: EventEmitter<string> = new EventEmitter();

  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value) => this.onDebounce.emit(value));
  }

  emitInputValue(value: string) {
    this.inputValue.emit(value);
  }

  onSubmit(event: Event, value: string) {
    event.preventDefault();

    if (value.trim().length === 0) return;

    this.emitInputValue(value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
