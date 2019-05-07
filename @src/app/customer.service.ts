import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
  customerUrl = 'http://localhost:3000/api/customers';
// customers=[
//   { id: 11, name: 'Mr. Nice',email:'nick@email.com', mobile:'23124235',address:'silk board bilwara' },
//   { id: 12, name: 'Narco',email:'narco@email.com', mobile:'23124235',address:'silk board bilwara' }
// ];
 customers:any=[];
 constructor( private http: HttpClient){}
//  getDBCustomers (){
//   this.http.get<[]>(this.customerUrl).subscribe((result)=>{console.log(JSON.stringify(result))});
// }

getRemoteCustomers(): Observable<[]>{
  return this.http.get<[]>(this.customerUrl); 		
}

deleteRemoteCustomer(customer){
  return this.http.delete(this.customerUrl+"/"+customer.id); 		
}
  getCustomers(){
    if(localStorage.getItem('customers')!=null){
      this.customers=JSON.parse(localStorage.getItem('customers'));
    }
    return this.customers;
  }
  addCustomers(customer){
    alert(customer)
    customer.id = Math.round(Math.random()*1000000);
    console.log("addcustomer ::"+JSON.stringify(customer))
    this.customers.push(customer);
    localStorage.setItem('customers',JSON.stringify(this.customers));
    

  }
   updateRemoteCustomer(customer){
     return this.http.put(this.customerUrl+"/"+customer.id,customer);
   }

  addRemoteCustomer(customer):Observable<any>{
  	return this.http.post(this.customerUrl,customer);
 }
 getRemoteCustomerById(id):Observable<any>{
   return this.http.get(this.customerUrl+"/"+id);
 }

    updateCustomer(customer){
     for(var i = 0; i < this.customers.length; i++){
      if(this.customers[i].id == customer.id){
       
        this.customers[i] = customer;
        localStorage.setItem('customers',JSON.stringify(this.customers));
       break;
      }
    }
  }

   
  deleteAllcustomers(id){
    for(var i = 0; i< this.customers.length; i++){
      this.customers.splice(i, this.customers.length);      
    }
    localStorage.setItem('customers',JSON.stringify(this.customers));
  }

  deleteCustomer(c){
    for(var i = 0; i< this.customers.length; i++){
      if(this.customers[i].id == c.id){
        this.customers.splice(i,1);
      }
    }
    localStorage.setItem('customers',JSON.stringify(this.customers));
  }
  getCustomerById(id:number){
    for(var i = 0; i< this.customers.length; i++){
      if(this.customers[i].id == id){
        return this.customers[i];
        break;
      }
    }
}}
