import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  studentList:any=[
    {rollNo:1,firstName:'Raghu',lastName:'Ram',dob:'11/12/12',class:'5th',subject:'Maths',teacher:'shakthi',address:'hyderabad'}
    // {rollNo:2,firstName:'Suresh',lastName:'Reddy',dob:'01/1/14',class:'10th',subject:'Computer',teacher:'Mahi',address:'Banglore'},
    // {rollNo:3,firstName:'Yadam',lastName:'Sathish',dob:'07/2/18',class:'MBA',subject:'Salesforce',teacher:'Sathish',address:'Chennai'},
  ];

  getStudentsView(){
    return this.studentList;
  }

  studentAdd(student){

    this.studentList.push(student);
  }



  deleteStudent(rollNo){
    for(var i=0;i<this.studentList.length;i++){
        if(this.studentList[i].rollNo == rollNo){

         this.studentList.splice(i,1);
        }

    }
  }

  editStudent(rollNo){
      for(var i=0; i<this.studentList.length;i++){
        if(this.studentList[i].rollNo == rollNo){
          return this.studentList[i];
    
        }
        
      }
  }

   
}
