import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: '',
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'home',
      },
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: '/numbers',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: '/un-common',
          },
        ],
      },
      {
        label: 'Pipes perzonalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom pipe',
            icon: 'pi pi-cog',
            routerLink: '/custom',
          },
        ],
      },
    ];
  }
}
