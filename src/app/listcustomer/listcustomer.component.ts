import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.scss'],
})
export class ListcustomerComponent implements OnInit {

  constructor( private customerService : CustomerService,private router: Router ) { }
  customer:any={
    name:"",
    email:"",
    phone:"",
    address:""
  };
  list = [];
  deleteAllCustomer(){
    
  }
  ngOnInit() {
    this.customerService.getRemoteCustomers().subscribe((result) => {this.list = result;});
  	//this.list = this.customerService.getCustomers();
  }
  onDelete(customer){
    console.log(JSON.stringify(customer));
    this.customerService.deleteRemoteCustomer(customer).subscribe((e) => {
      this.customerService.getRemoteCustomers().subscribe((result) => {this.list = result;});
    });
   // this.list = this.customerService.getCustomers();
  }
  onEdit(c){
    this.router.navigate(['/editcustomer/'+c.id]);
  }
}
