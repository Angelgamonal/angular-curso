import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
