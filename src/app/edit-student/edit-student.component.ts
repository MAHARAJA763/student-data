import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute,  } from '@angular/router'
import { students } from '../student.data'
import { from } from 'rxjs';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  editStudentForm:FormGroup;
  students=students;
  // id:string;
  arrayId;

  constructor(private FormBuilder:FormBuilder, private ActivatedRoute:ActivatedRoute, private Router:Router) { }
  ngOnInit() {
    // this.id= this.ActivatedRoute.snapshot.paramMap.get("id");
    this.arrayId=parseInt(this.ActivatedRoute.snapshot.paramMap.get("id"))-1;
    
    this.editStudentForm = this.FormBuilder.group({
      firstName:[this.students[this.arrayId].firstname,[Validators.required,Validators.pattern(/^[a-zA-Z]+/)]],
      lastName:[this.students[this.arrayId].lastname,[Validators.required,Validators.pattern(/^[a-zA-Z]+/)]],
      email:[this.students[this.arrayId].email,[Validators.required,Validators.email]],
      password:[this.students[this.arrayId].password,[Validators.required]]
    });
    
  }

  onUpdate(){
    if(this.editStudentForm.valid){
      this.students[this.arrayId].firstname=this.editStudentForm.controls.firstName.value
      this.students[this.arrayId].lastname=this.editStudentForm.controls.lastName.value
      this.students[this.arrayId].email=this.editStudentForm.controls.email.value
      this.students[this.arrayId].password=this.editStudentForm.controls.password.value
      this.Router.navigateByUrl('/student')
    }
  }



}
