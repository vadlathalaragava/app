import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {

  private selectedItem: any;
  private icons = [
    'student',
    'student-add',
    'student-edit',
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private router: Router) {
  	this.items.push({
  		title: 'Student List',
        note:'/student-list',
        icon: this.icons[0]
  	});
  	this.items.push({
  		title: 'Student Add',
  		note:'/student-add',
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
