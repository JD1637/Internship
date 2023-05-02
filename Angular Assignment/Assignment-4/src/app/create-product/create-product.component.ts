import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ProductListService } from '../Services/product-list.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
  providers : [ ProductListService ]
})

export class CreateProductComponent {
  listReceived:any = [];

  @ViewChild('name') name:any;
  @ViewChild('owner') owner:any;
  @ViewChild('price') price:any;
  @ViewChild('type') type:any;
  @ViewChild('number') number:any;
  @ViewChild('email') email:any;

  constructor(private List : ProductListService){
    this.getList();
  }

  getList(){
    this.listReceived = this.List.getProductList();
    // console.log(this.name.nativeElement.value);
    // console.log(this.owner.nativeElement.value);
    // console.log(this.price.nativeElement.value);
    // console.log(this.type.nativeElement.value); 
  }

  add(){
    let product = {
      name: this.name.nativeElement.value,
      price: this.price.nativeElement.value,
      type: this.type.nativeElement.value,
      owner: this.owner.nativeElement.value,
      number: this.number.nativeElement.value,
      email: this.email.nativeElement.value
    };
    // console.log(this.name.nativeElement.value);
    // console.log(product);
    
    this.List.addProduct(product);
    this.listReceived = this.List.getProductList();
    this.clear();

  }

  clear() {
    this.name.nativeElement.value= '';
    this.price.nativeElement.value = 0;
    this.type.nativeElement.value = '';
    this.owner.nativeElement.value = '';
    this.number.nativeElement.value = 0;
    this.email.nativeElement.value = '';
  }

  remove(index:number){
    this.List.removeItem(index);
    console.log(index);
  }

  update(index:number){
    this.List.updateItem(index);
  }

  ngDoCheck(){
    console.log("changes are detected");
  }
  
}
