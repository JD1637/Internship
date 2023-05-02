import { Component} from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent{
  color:any = [];
  value:any = [];

  fruiteList = [
    { id: 1, name: 'apple', vitamin: '70', type: 'juicy' },
    { id: 2, name: 'grapes', vitamin: '50', type: 'juicy' },
    { id: 3, name: 'banana', vitamin: '30', type: 'dry' },
    { id: 4, name: 'pear', vitamin: '40', type: 'dry' },
    { id: 5, name: 'watermalon', vitamin: '65', type: 'juicy' }
  ]

  constructor() {
    this.fruiteList.map((object: any,index) => {
      console.log(object.name);
      if(object.name == 'apple'){
        this.color[index] = 'red';
        this.value[index] = 40;
      }
      else if(object.name == 'grapes'){
        this.color[index] = 'green';
        this.value[index] = 60;
      }
      else if(object.name == 'banana'){
        this.color[index] = 'yellow';
        this.value[index] = 90;
      }
      else{
        this.color[index] = 'blue';
        this.value[index] = 30;
      }
    })
    console.log(this.color.length);   
  }
}
