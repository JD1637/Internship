import { Component , Input } from '@angular/core';
import { CreateProductComponent } from '../create-product/create-product.component'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() data:any = [];
}
