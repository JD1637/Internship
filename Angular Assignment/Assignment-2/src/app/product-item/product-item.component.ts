import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  // use of parent to child  product-item=>child  && list-component=>parent
  @Input() name: any = [];
  @Input() quantity: any = [];

  type(value: any) {
    this.name.push(value);
    this.quantity.push(0);
  }

  add(index: number) {
    this.quantity[index]++;
  }

  minus(index: number) {
    if (this.quantity[index] == 0) {
      alert("empty");
    } else {
      this.quantity[index]--;
    }
  }
}
