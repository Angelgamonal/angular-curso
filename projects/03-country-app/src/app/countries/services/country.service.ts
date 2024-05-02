import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';
import { ToastService } from 'angular-toastify';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient, private _toastService: ToastService) {}

  searchCapital(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`).pipe(
      catchError((error) => {
        this._toastService.error('No se encontraron resultados');

        return of([]);
      })
    );
  }

  searchCountry(country: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${country}`;

    const params = new HttpParams().set('fullText', true);

    return this.http.get<Country[]>(url, { params }).pipe(
      catchError((error) => {
        console.log('error->', error);
        this._toastService.error('No se encontraron resultados');
        return of([]);
      })
    );
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url).pipe(
      catchError((error) => {
        console.log(error);
        this._toastService.error('No se encontraron resultados');
        return of([]);
      })
    );
  }
}
