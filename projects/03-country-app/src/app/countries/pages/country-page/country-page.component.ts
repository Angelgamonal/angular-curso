import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
  country?: Country;
  isLoading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   this.countryService.searchCountryByAlphaCode(id).subscribe((resp) => {
    //     console.log(resp);
    //   });
    // });

    this.activatedRoute.params
      .pipe(
        switchMap((params) =>
          this.countryService.searchCountryByAlphaCode(params['id'])
        )
      )
      .subscribe((country) => {
        if (!country) return this.router.navigateByUrl('');

        this.isLoading = true;
        return (this.country = country);
      });
  }
}
