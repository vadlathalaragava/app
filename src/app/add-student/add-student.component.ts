import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {

  constructor(private router: Router,private studentService : StudentService) { }

  ngOnInit() {}
  student:any={
      firstname:'',
      lastname:'',
      dob:'',
      stdclass:'',
      subject:'',
      classteacher:'',
      address:''
  }
  onAddStudent(student){
    this.studentService.addStudent(student);
    this.router.navigate(['/list-student']);
  }
}
