import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent implements OnInit {
  countries: Country[] = [];
  initialValue = '';

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.initialValue = this.countryService.cacheStore.byCountries.term;
  }

  onSearchCountry(country: string) {
    this.countryService.searchCountry(country).subscribe((resp) => {
      this.countries = resp;
    });
  }
}
