import { Component, OnInit } from '@angular/core';
import CustomerService from '../customer.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.scss'],
})
export class ListcustomerComponent implements OnInit {
  list:any;
customer:any={id:0,name:'',email:'',phone:'',address:''}
  constructor(private customerService:CustomerService, private router:Router) {}

  ngOnInit() {
    //this.customerService.getDBCustomers();

    this.customerService.getRemoteCustomers().subscribe((result) => {this.list = result;});
  	//  this.list = this.customerService.getCustomers();
    
  }
  // list =this.customerService.getCustomers();
  deleteCustomer(customer){
    this.customerService.deleteRemoteCustomer(customer).subscribe((e) => {
      this.customerService.getRemoteCustomers().subscribe((result) => {this.list = result;});
    });
   // this.list = this.customerService.getCustomers();
  }
  // deleteCustomer(c){
  //   this.customerService.deleteCustomer(c);
   
  // }

  deleteAllCustomers(customer){
    this.customerService.deleteAllcustomers(customer);
    this.customerService.getCustomers();
   
  }
  onEdit(c){
    this.router.navigate(['/editcustomer/'+c.id]);
  }
}
