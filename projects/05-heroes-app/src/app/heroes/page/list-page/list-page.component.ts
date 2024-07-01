import { Component, OnInit } from '@angular/core';

import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``,
})
export class ListPageComponent implements OnInit {
  public heroes: Hero[] = [];
  public errorHeroe: null | string = null;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService
      .getHeroes()
      .pipe(
        catchError(() => {
          this.errorHeroe = 'No se encontraron heroes, conecte su json server';
          return of([]);
        })
      )
      .subscribe((heroes) => (this.heroes = heroes));
  }
}
