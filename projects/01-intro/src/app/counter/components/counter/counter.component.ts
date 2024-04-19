import { Component } from '@angular/core';

const INITIAL_COUNTER = 10;

@Component({
  selector: 'app-counter',
  template: `
    <h3 class="text-2xl mb-2">Counter {{ counter }}</h3>
    <button
      class="px-1 border border-black ml-[-1px]
    "
      (click)="addCounter()"
    >
      +1
    </button>
    <button class="px-1 border border-black ml-[-1px]" (click)="resetCounter()">
      Reset
    </button>
    <button
      class="px-1 border border-black ml-[-1px]"
      (click)="decrementCounter()"
    >
      -1
    </button>

    <hr class="mt-2" />
  `,
})
export class CounterComponent {
  counter = INITIAL_COUNTER;

  addCounter() {
    this.counter = this.counter + 1;
  }

  decrementCounter() {
    this.counter -= 1;
  }

  resetCounter() {
    this.counter = INITIAL_COUNTER;
  }
}
