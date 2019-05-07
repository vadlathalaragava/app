import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import{ EditCustomerComponent } from './edit-customer/edit-customer.component'

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'customer',
    component:CustomerComponent,
  },
  {
    path:'about',
    component:AboutComponent,
  },
  {
    path:'addcustomer',
    component:AddcustomerComponent,
  },
  {
    path:'listcustomer',
    component:ListcustomerComponent,
  },
  {
    path:'edit-customer/:id',
    component:EditCustomerComponent,
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {
    path:'list',
    loadChildren:'./list/list.module#ListPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
