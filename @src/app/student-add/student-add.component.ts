import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss'],
})
export class StudentAddComponent implements OnInit {

 
  ngOnInit() {}


  student={rollNo:1,firstName:"",lastName:"",class:"",subject:"",dob:"",teacher:"",address:""}

  constructor(private studentService:StudentService,private router:Router) {
  }


  addStudent(student){
      this.studentService.studentAdd(student);
      this.router.navigate(['/student-list']);
      this.studentService.getStudentsView();
  }




  // addStudent(student){
   
  //     // this.studentService.addStudent(student);
  //     // this.router.navigate(['/student-list'])
  //     // this.studentService.getStudent();

  //   }

}
