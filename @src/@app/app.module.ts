import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {LoginComponent} from './login/login.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {AboutComponent} from './about/about.component';
import {CustomerComponent} from './customer/customer.component';
import {ListcustomerComponent} from './listcustomer/listcustomer.component';
import {AddcustomerComponent} from './addcustomer/addcustomer.component';
import {EditCustomerComponent} from './edit-customer/edit-customer.component'
@NgModule({
  declarations: [AppComponent,LoginComponent,DashboardComponent,AboutComponent,CustomerComponent,ListcustomerComponent,AddcustomerComponent,EditCustomerComponent],
  entryComponents: [],
  imports: [BrowserModule,FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
