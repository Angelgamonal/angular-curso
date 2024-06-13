import { Component } from '@angular/core';

@Component({
  templateUrl: './order.component.html',
  selector: 'products-order',
})
class OrderComponent {
  public isUpperCase = false;

  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }
}

export default OrderComponent;
