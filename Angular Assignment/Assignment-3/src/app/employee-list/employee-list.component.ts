import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  title = "Employee List";
  status: boolean = false;
  hide: boolean = true;
  color:string = '';

  @Input() Asite: any = [
    { name: 'Vanshika', id: 1, contact: 'v@', type: 'Devloper' },
    { name: 'Himanshu', id: 2, contact: 'h@', type: 'Tester' },
    { name: 'Kevin', id: 3, contact: 'k@', type: 'DevOps' },
    { name: 'Nikita', id: 4, contact: 'n@', type: 'QA' },
    { name: 'Vishal', id: 5, contact: 'V@', type: 'Tester' }
  ]

  hover() {
    this.Asite.map((object: any) => {
      if(object.type === 'Developer'){
        this.color =  "red";
      }
      else if(object.type === 'Tester'){
        this.color =  "yellow";
      }
      else if(object.type === 'DevOps'){
        this.color =  "blue";
      }
    })
  }

  rank() {

    this.status = true;
    this.hide = false;
    for (let i = 0; i < this.Asite.length; i++) {
      if (this.Asite[i].type === 'Devloper') {
        this.Asite[i].rank = '1';
      }
      else if (this.Asite[i].type === 'Tester') {
        this.Asite[i].rank = '2';
      }
      else if (this.Asite[i].type === 'DevOps') {
        this.Asite[i].rank = '3';
      }
      else {
        this.Asite[i].rank = '-'
      }
    }
    this.hover();
  }

  contactChange(id:number){
    let index = this.Asite.findIndex((e:any)=>e.id == id);
    console.log(index);

    let confirmationMsg:boolean = confirm('Are you sure?');
    if(confirmationMsg){
      let changeContact = prompt('Give your contact');
      this.Asite[index].contact = changeContact;
    }
    else{
      alert('Contact not changed');
    }
  }
}
