import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  student:any = [];
  students:any = [
    // {
    //   rollno:1,
    //   firstname:'Swathi',
    //   lastname:'Boya',
    //   dob:'15th Aug',
    //   stdclass:'10',
    //   subject:'Maths',
    //   classteacher:'Jaya Krishna',
    //   address:'India'
    // },
    // {
    //   rollno:2,
    //   firstname:'Divya',
    //   lastname:'V',
    //   dob:'15th Aug',
    //   stdclass:'10',
    //   subject:'Maths',
    //   classteacher:'Jaya Krishna',
    //   address:'India'
    // }
  ];
  constructor() {
    var studentList = [
    {
      rollno:1,
      firstname:'Swathi',
      lastname:'Boya',
      dob:'15th Aug',
      stdclass:'10',
      subject:'Maths',
      classteacher:'Jaya Krishna',
      address:'India'
    },
    {
      rollno:2,
      firstname:'Divya',
      lastname:'V',
      dob:'15th Aug',
      stdclass:'10',
      subject:'Maths',
      classteacher:'Jaya Krishna',
      address:'India'
    }];
    if(localStorage.getItem('students')==null || JSON.parse(localStorage.getItem('students')).length==0){
      this.student = studentList;
      this.setLocalstorageStudent(this.student);
    }else{
      this.getLocalStorageStudent();
    }
   }
  getStudent(){
    return this.students;
  }
  setLocalstorageStudent(list){
    localStorage.setItem('students',JSON.stringify(list));
  }
  getLocalStorageStudent(){
    this.students = JSON.parse(localStorage.getItem('students'));
  }
  addStudent(student){
    student.rollno = Math.round(Math.random()*10000);
    this.students.push(student);    
    this.setLocalstorageStudent(this.students);
  }
  updateStudent(student){
    for(var i=0;i<this.students.length;i++){
      if(this.students[i].rollno == student.rollno){
        this.students[i] = student;
        break;
      }
    }
    this.setLocalstorageStudent(this.students);
  }

  deleteStudent(student){
    for(var i=0;i<this.students.length; i++){
      if(this.students[i].rollno == student.rollno){
        this.students.splice(i,1);
      }
    }
    this.setLocalstorageStudent(this.students);
  }
  getStudentByRollNo(rollno){
    for(var i=0;i<this.students.length; i++){
      if(this.students[i].rollno == rollno){
       return this.students[i];
      }
    }
    this.setLocalstorageStudent(this.students);
  }
}
