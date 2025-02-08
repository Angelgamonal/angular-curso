import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'component-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  public menuItems: MenuItem[] = [
    {
      name: 'Full screen',
      route: '/maps/fullscreen',
    },
    {
      name: 'Zoom range',
      route: '/maps/zoom-range',
    },
    {
      name: 'Markers',
      route: '/maps/markers',
    },
    {
      name: 'Houses',
      route: '/maps/properties',
    },
  ];
}
