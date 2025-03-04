import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './card-item.component.html',
  selector: 'gif-card-item',
})
export class CardItemComponent implements OnInit {
  @Input()
  imgUrl: string = 'https://flowbite.com/docs/images/blog/image-1.jpg';

  @Input()
  title: string = 'Noteworthy technology acquisitions 2021';

  ngOnInit(): void {
    if (!this.imgUrl) throw new Error('imgUrl is required.');
  }
}
