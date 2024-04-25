import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  searchByCapital(term: string) {
    this.countryService.searchCapital(term).subscribe((resp) => {
      this.countries = resp;
    });
  }
}
