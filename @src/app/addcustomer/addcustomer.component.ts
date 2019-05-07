import { Component, OnInit } from '@angular/core';
import CustomerService from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss'],
})
export class AddcustomerComponent implements OnInit {
  customers:any;
  customer={id:1,name:"",email:"",phone:"",address:""}
  constructor(private customerService:CustomerService,private router:Router) {


  }
  // addCustomer(customer){
   
  //     this.customerService.addCustomers(customer);
  //     this.router.navigate(['/listcustomer'])
  //     this.customerService.getCustomers();

  //   }
    
    addCustomer(customer){
      this.customerService.addRemoteCustomer(customer).subscribe((e)=>{this.router.navigate(['/listcustomer']);});
    }
    
  ngOnInit() {}

}
