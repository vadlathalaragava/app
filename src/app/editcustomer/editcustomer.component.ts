import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.scss'],
})
export class EditcustomerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private customerService:CustomerService, private router: Router) { }
  id: number;
  private sub: any;
  customer:any;
  ngOnInit() {
    this.customer = {name:'', email:'', address:'', phone:''};
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.customerService.getRemoteCustomerById(this.id).subscribe((customer)=>{this.customer = customer;});
   });
  }

  addUpdateCustomer(customer){
    // this.customerService.addUpdateCustomer(customer);
    // this.router.navigate(['/listcustomer']);
    this.customerService.updateRemoteCustomer(this.customer).subscribe(()=>{this.router.navigate(['/listcustomer']);});
  }


}
