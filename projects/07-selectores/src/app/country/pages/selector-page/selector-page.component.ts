import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Region, SmallCountry } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'selector-page',
  templateUrl: './selector-page.component.html',
  styles: [],
})
export class SelectorPageComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    border: ['', [Validators.required]],
  });

  public countriesByRegion: SmallCountry[] = [];

  public borders: SmallCountry[] = [];

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.onRegionChanged();
    this.onCountryChanged();
  }

  get regions(): Region[] {
    return this.countryService.regions;
  }

  onRegionChanged(): void {
    this.myForm
      .get('region')!
      .valueChanges.pipe(
        tap(() => this.myForm.get('country')!.setValue('')),
        tap(() => (this.borders = [])),
        switchMap((region) => this.countryService.getCountriesByRegion(region))
      )
      .subscribe((region) => {
        this.countriesByRegion = region;
      });
  }

  onCountryChanged(): void {
    this.myForm
      .get('country')!
      .valueChanges.pipe(
        tap(() => this.myForm.get('border')!.setValue('')),
        filter((value) => value.length > 0),
        switchMap((alphaCode) =>
          this.countryService.getCountyByAlphaCode(alphaCode)
        ),
        switchMap((country) =>
          this.countryService.getCountriesBorderByCode(country.borders)
        )
      )
      .subscribe((country) => {
        // this.countriesByRegion = region;
        this.borders = country;
      });
  }
}
