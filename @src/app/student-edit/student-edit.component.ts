import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss'],
})
export class StudentEditComponent implements OnInit {
  student:any;
  rollNo: number;
  private sub: any;
  
  
     
  constructor(private route: ActivatedRoute, private studentService:StudentService,private router:Router) { }

  studentEdit(rollNo){
    this.studentService.editStudent(rollNo);
    this.router.navigate(['/student-list']);
    
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.rollNo = +params['rollNo']; // (+) converts string 'id' to a number
      console.log("rollNo is "+this.rollNo);
      this.student = this.studentService.editStudent(this.rollNo);
       // In a real app: dispatch action to load the details here.
    })
  }
}
