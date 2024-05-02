import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  regions: Country[] = [];

  constructor(private countryService: CountryService) {}

  onSearchRegion(region: string) {
    this.countryService.searchRegion(region).subscribe((resp) => {
      this.regions = resp;
    });
  }
}
