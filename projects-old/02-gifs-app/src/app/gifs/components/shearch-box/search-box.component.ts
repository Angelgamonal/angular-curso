import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      placeholder="Buscar gifs..."
      class="border rounded-md border-gray-500 px-2 py-1 w-full max-w-[350px]"
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag() {
    const inputValue = this.tagInput.nativeElement.value;

    if (inputValue.trim().length === 0) return;

    this.gifsService.shearhTag(inputValue);

    this.tagInput.nativeElement.value = '';

    console.log(this.gifsService.tagsHistory);
  }
}
