import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import CustomerService from '../customer.service';


@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.scss'],
})
export class EditCustomerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private customerService:CustomerService, private router:Router) { }
  id: number;
  private sub: any;
  customer:any;
  ngOnInit() {
  	//  this.sub = this.route.params.subscribe(params => {
    //    this.id = +params['id']; // (+) converts string 'id' to a number
    //    console.log("id is "+this.id);
    //    this.customer = this.customerService.getCustomerById(this.id);

    this.customer = {name:'', email:'', address:'', phone:''};
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.customerService.getRemoteCustomerById(this.id).subscribe((customer)=>{this.customer = customer;});
   });

   updateCustomer(){
    this.customerService.updateRemoteCustomer(this.customer).subscribe(()=>{this.router.navigate(['/list-customer']);});
  }

       // In a real app: dispatch action to load the details here.
    });
  }
  onEdit(customer){
    this.customerService.updateCustomer(customer);
    this.router.navigate(['/listcustomer']);
    this.customerService.getCustomers();
  }
}
