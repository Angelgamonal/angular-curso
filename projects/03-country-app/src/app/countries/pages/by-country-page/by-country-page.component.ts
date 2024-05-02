import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  onSearchCountry(country: string) {
    this.countryService.searchCountry(country).subscribe((resp) => {
      console.log('resp->', resp);

      this.countries = resp;
    });
  }
}
