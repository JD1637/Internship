import { Component } from '@angular/core';

@Component({
  selector: 'app-sigle-product',
  templateUrl: './sigle-product.component.html',
  styleUrls: ['./sigle-product.component.scss']
})
export class SigleProductComponent {
  product_name = "Dell Laptop";
  product_price = "$1000";
  quantity = 0;
  sale: boolean = true;

  add(){
    this.quantity += 1;
  }

  minus(){
    this.quantity += -1;
  }
}
