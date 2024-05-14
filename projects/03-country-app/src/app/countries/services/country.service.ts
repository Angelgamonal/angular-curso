import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { ToastService } from 'angular-toastify';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byRegion: { countries: [] },
    byCountries: { term: '', countries: [] },
  };

  constructor(private http: HttpClient, private _toastService: ToastService) {}

  private getCountriesRequets(
    url: string,
    params?: HttpParams
  ): Observable<Country[]> {
    return this.http.get<Country[]>(url, { params }).pipe(
      catchError(() => {
        this._toastService.error('No se encontraron resultados');
        return of([]);
      })
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequets(url).pipe(
      tap((countries) => (this.cacheStore.byCapital = { countries, term }))
    );
  }

  searchCountry(country: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${country}`;

    const params = new HttpParams().set('fullText', true);

    return this.getCountriesRequets(url, params).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCountries = { countries, term: country })
      )
    );
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;

    return this.getCountriesRequets(url);
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;

    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((error) => {
        return of(null);
      })
    );
  }
}
