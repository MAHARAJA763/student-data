import { Component, OnInit } from '@angular/core';
import { students } from '../student.data'
import { from } from 'rxjs';
import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students= students;
  
  
  constructor() { }
  ngOnInit() {
    console.log(this.students[0].email)
    
  }

}

