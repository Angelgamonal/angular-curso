import { Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``,
})
export class NewPageComponent {
  public plublishers = [
    { id: 'DC Comincs', value: 'DC - Comics' },
    { id: 'Marvel Comincs', value: 'MARVEL - Comics' },
  ];
}
