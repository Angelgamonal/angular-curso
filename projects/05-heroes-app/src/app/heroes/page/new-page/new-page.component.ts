import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentDeleteComponent } from '../../components/dialog-content-delete/dialog-content-delete.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``,
})
export class NewPageComponent implements OnInit {
  public publishers = [
    { id: 'DC Comics', value: 'DC - Comics' },
    { id: 'Marvel Comics', value: 'MARVEL - Comics' },
  ];

  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) return this.router.navigateByUrl('/');

        this.heroForm.reset(hero);

        return;
      });
  }

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;

    return hero;
  }

  onSubmit() {
    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero).subscribe((hero) => {
        this.showSnackBar(`${hero.superhero} updated`);
      });

      return;
    }

    this.heroesService.addHero(this.currentHero).subscribe((hero) => {
      this.router.navigateByUrl('/');
      this.showSnackBar(`${hero.superhero} created`);
    });
  }

  showSnackBar(message: string) {
    this.snackbar.open(message, 'cerrar', {
      duration: 2500,
    });
  }

  openDialog() {
    if (!this.currentHero.id) throw Error('hero id is required');

    const dialogRef = this.dialog.open(DialogContentDeleteComponent, {
      data: this.currentHero,
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap(() => {
          return this.heroesService.deleteHeroById(this.currentHero.id);
        })
      )
      .subscribe((result) => {
        if (!result) {
          this.showSnackBar('this does not deleted');
          return;
        }

        this.router.navigateByUrl('/heroes/list');
        this.showSnackBar('Deleted success');
      });

    // dialogRef.afterClosed().subscribe((result) => {
    //   if (!result) return;

    //   this.heroesService
    //     .deleteHeroById(this.currentHero.id)
    //     .subscribe((result) => {
    //       if (!result) {
    //         this.showSnackBar('this does not deleted ');
    //         return;
    //       }

    //       this.router.navigateByUrl('/heroes/list');
    //       this.showSnackBar('Deleted success');
    //     });
    // });
  }
}
