import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroNames = ['Iroman', 'Spiderman', 'Superman', 'Antman'];
  removedHero?: string;

  removeLastItem() {
    this.removedHero = this.heroNames.pop();
  }
}
