import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
   
  customers = [
    { id:1, firstName: 'Akshatha', lastName: 'AM', email:'akshatha@gmail.com', phone:'1234' },
    { id:2, firstName: 'Rakesh', lastName: 'KM', email:'rakesh@gmail.com', phone:'123456' }
  ];
  constructor(){}
getCustomers(){
  if(localStorage.getItem('customers') != null){
    this.customers = JSON.parse(localStorage.getItem('customers'));
  }
return this.customers;
}
addStudents(customer){
  var updated = false;
  for(var i = 0; i < this.customers.length; i++){
    if(customer.id == this.customers[i].id){
      updated = true;
      this.customers[i] = customer;
      localStorage.setItem('customers', JSON.stringify(this.customers));
      break;
    }
  }
if(!updated){
  customer.id = Math.round(Math.random()*1000000);
  this.customers.push(customer);
  localStorage.setItem('customers', JSON.stringify(this.customers));
}
}
deleteAllStudents(id){
  for(var i = 0; i< this.customers.length; i++){
    this.customers.splice(i, this.customers.length);
  }
}
deleteStudent(a){
  for(var i = 0; i< this.customers.length; i++){
    if(a.id == this.customers[i].id){
      this.customers.splice(i, a.id);
    }
  }
}

getCustomerById(id:number){
  for(var i = 0; i<this.customers.length; i++){
    if(this.customers[i].id==id){
      return this.customers[i];
      break;
    }
   
    }
  };
}
