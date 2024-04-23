import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './card-item.component.html',
  selector: 'gif-card-item',
})
export class CardItemComponent {
  @Input()
  imgUrl: string = 'https://flowbite.com/docs/images/blog/image-1.jpg';

  @Input()
  title: string = 'Noteworthy technology acquisitions 2021';
}
