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
  isLoading: boolean = false;

  constructor(private countryService: CountryService) {}

  searchByCapital(term: string) {
    this.isLoading = true;
    this.countryService.searchCapital(term).subscribe((resp) => {
      this.countries = resp;
      this.isLoading = false;
    });
  }
}
