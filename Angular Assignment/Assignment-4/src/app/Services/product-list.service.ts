import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  
  ProductList:any = [
    { name: 'Dell Laptop', price: 30000, type: 'electric', owner: 'dell', number: 123456, email: 'dell@' },
    { name: 'HP Laptop', price: 90000, type: 'electric', owner: 'hp', number: 567894, email: 'hp@' },
  ]
  constructor() { }
  getProductList() {
    return this.ProductList;
  }

  addProduct(product: any){
    this.ProductList.push(product);
    console.log(this.ProductList)
  }

  removeItem(index:number){
    this.ProductList.splice(index,1);
  }

  updateItem(index:number){
    let confirmation = confirm('Are you sure?');
    if(confirmation){
      let changeContact = prompt('Give your Contact email');
      this.ProductList[index].email = changeContact;
    }
  }
}
