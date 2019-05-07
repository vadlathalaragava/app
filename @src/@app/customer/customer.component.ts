import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  CustomerService  from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {

  list=[];
   private icons = [
    'people',
    'person-add',
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private router: Router,private CustomerService:CustomerService) {
  	this.items.push({
  		title: 'List',
        note:'/listcustomer',
        icon: this.icons[0]
  	});
  	this.items.push({
  		title: 'Add',
  		note:'/addcustomer',
      icon: this.icons[1]
    });
    
  }
  openUrl(item){
    this.router.navigate([item.note]);
  }

  ngOnInit() {
    this.list = this.CustomerService.getCustomers();
  }
}
