import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { students } from '../student.data'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  
  students=students;
  addStudentForm:FormGroup;
  constructor(private FormBuilder:FormBuilder, private Router:Router) { }

  ngOnInit() {
    this.addStudentForm = this.FormBuilder.group({
      firstName:['',[Validators.required,Validators.pattern(/^[a-zA-Z]+/)]],
      lastName:['',[Validators.required,Validators.pattern(/^[a-zA-Z]+/)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    });
  }

  addStudent(){
    var id = this.students.length+1
    if(this.addStudentForm.valid){
      students.push({
        id:id,
        firstname:this.addStudentForm.controls.firstName.value,
        lastname:this.addStudentForm.controls.lastName.value,
        email:this.addStudentForm.controls.email.value,
        password:this.addStudentForm.controls.password.value
      })
      this.Router.navigateByUrl('/student')
    }
  }

}
