import { Injectable } from '@angular/core';

import { Observable, catchError, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { Hero } from '../interfaces/hero.interface';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  private baseUrl = environments.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.httpClient
      .get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }

  getHeroesByName(name: string): Observable<Hero[]> {
    const params = new HttpParams().set('_limit', 5).set('q', name);

    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`, { params });
  }
}
