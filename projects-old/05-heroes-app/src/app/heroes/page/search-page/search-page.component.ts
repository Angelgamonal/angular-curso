import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``,
})
export class SearchPageComponent implements OnInit {
  private debouncer: Subject<string> = new Subject<string>();
  public searchInput = new FormControl('');
  public heroes: Hero[] = [];

  public selectedHero?: Hero;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.onGetHeroesByName('');

    this.debouncer.pipe(debounceTime(400)).subscribe((value) => {
      if (value.trim().length === 0) return;
      this.onGetHeroesByName(value);
    });
  }

  private onGetHeroesByName(value: string) {
    this.heroesService
      .getHeroesByName(value)
      .subscribe((heroes) => (this.heroes = heroes));
  }

  onChangeInput() {
    const value = this.searchInput.value || '';

    this.debouncer.next(value);
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;

    this.searchInput.setValue(hero.superhero);

    this.selectedHero = hero;
  }
}
