import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get searchList() {
    return this.gifsService.tagsHistory;
  }

  onSearchTag(tag: string) {
    this.gifsService.shearhTag(tag);
  }
}
