import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  nameLower = 'Angel';
  nameUpper = 'Gamonal';
  fullName = 'AnGeL GaBriEl GaMOnAl T.';

  customDate: Date = new Date();
}
