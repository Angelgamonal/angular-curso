import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  regions: Country[] = [];

  regionList: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  selectedRegion?: Region;
  isLoading = false;

  constructor(private countryService: CountryService) {}

  onSearchRegion(region: Region) {
    this.isLoading = true;
    this.selectedRegion = region;

    this.countryService.searchRegion(region).subscribe((resp) => {
      this.regions = resp;
      this.isLoading = false;
    });
  }
}
