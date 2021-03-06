import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  private selectedItem: any;
  private icons = [
    'people',
    'person-add',
    'edit-people',
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private router: Router) {
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
    // this.items.push({
  	// 	title: 'edit',
  	// 	note:'/editcustomer',
    //   icon: this.icons[2]
  	// });
  }
  openUrl(item){
    this.router.navigate([item.note]);
  }

  ngOnInit() {}
}
