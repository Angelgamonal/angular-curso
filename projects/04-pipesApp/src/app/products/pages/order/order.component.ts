import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  templateUrl: './order.component.html',
  selector: 'products-order',
})
class OrderComponent {
  public isUpperCase = false;
  public heroes: Hero[] = [
    {
      name: 'Supeman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green,
    },
  ];

  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }
}

export default OrderComponent;
