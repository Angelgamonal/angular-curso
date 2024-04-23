import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-page-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private gifService: GifsService) {}

  get gifsList(): Gif[] {
    return this.gifService.gifsList;
  }
}
