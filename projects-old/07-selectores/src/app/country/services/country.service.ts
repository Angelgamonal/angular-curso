import { Injectable } from '@angular/core';
import { Country, Region, SmallCountry } from '../interfaces/country.interface';
import { combineLatest, map, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private baseUrl = 'https://restcountries.com/v3.1';

  private _regions_: Region[] = [
    Region.Africa,
    Region.Americas,
    Region.Asia,
    Region.Europe,
    Region.Oceania,
  ];

  constructor(private http: HttpClient) {}

  get regions(): Region[] {
    return [...this._regions_];
  }

  getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
    if (!region) return of([]);

    const url = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;

    return this.http.get<Country[]>(url).pipe(
      map((countries) =>
        countries.map((country) => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? [],
        }))
      )
    );
  }

  getCountyByAlphaCode(alphaCode: string): Observable<SmallCountry> {
    const url = `${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`;

    return this.http.get<Country>(url).pipe(
      map((country) => ({
        borders: country.borders ?? [],
        cca3: country.cca3,
        name: country.name.common,
      }))
    );
  }

  getCountriesBorderByCode(borders: string[]): Observable<SmallCountry[]> {
    if (!borders || borders.length === 0) return of([]);

    const countriesRequets: Observable<SmallCountry>[] = [];

    borders.forEach((code) => {
      const request = this.getCountyByAlphaCode(code);
      countriesRequets.push(request);
    });

    return combineLatest(countriesRequets);
  }
}
