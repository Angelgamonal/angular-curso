import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  public reactiveMenu: MenuItem[] = [
    { title: 'Básicos', route: '/reactive/basic' },
    { title: 'Dinámicos', route: '/reactive/dynamic' },
    { title: 'Switches', route: '/reactive/switches' },
  ];

  public authMenu: MenuItem[] = [{ title: 'Register', route: '/auth' }];
}
