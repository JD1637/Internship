import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListComponent {
  productList = ['Laptop' , 'Mobile', 'ipad']
  item = [];
}
