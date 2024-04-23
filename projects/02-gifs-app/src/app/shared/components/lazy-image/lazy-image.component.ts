import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input()
  imgUrl!: string;

  @Input()
  alt: string = 'gif';

  isLoading = true;

  ngOnInit(): void {
    if (!this.imgUrl) throw new Error('imageUrl property is required');
  }

  onLoad() {
    this.isLoading = false;
  }
}
