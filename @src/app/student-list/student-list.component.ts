import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {

  list = this.studentService.getStudentsView();
 constructor(private studentService:StudentService, private router:Router) {}
 
  studentDelete(rollNo){
      this.studentService.deleteStudent(rollNo);
  }

editStudent(s){
  this.router.navigate(['./student-edit/'+s.rollNo]);
}
ngOnInit() {
  
} 


}

