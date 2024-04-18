import { Component } from '@angular/core';

const NAMES = ['Iroman', 'Spiderman', 'Superman', 'Antman'];

const AGES = [20, 30, 24, 38, 25];

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  name = 'Iroman';
  age = '45';

  get capitalizeName() {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName() {
    const indexRamdon = Math.floor(Math.random() * NAMES.length);

    this.name = NAMES[indexRamdon];
  }

  changeAge() {
    const indexRamdon = Math.floor(Math.random() * AGES.length);

    this.age = AGES[indexRamdon].toString();
  }

  reset() {
    this.name = 'Iroman';
    this.age = '45';
  }
}
