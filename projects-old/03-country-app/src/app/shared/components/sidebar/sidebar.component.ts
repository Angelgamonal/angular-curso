import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  navbarList = [
    {
      name: 'Por capital',
      url: 'countries/by-capital',
    },
    {
      name: 'Por Pais',
      url: 'countries/by-country',
    },
    {
      name: 'Por Region',
      url: 'countries/by-region',
    },
  ];
}
