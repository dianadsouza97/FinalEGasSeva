import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {PasswordValidator} from './shared/password.validator';
@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  
  
  updateprofile=this.fb.group({
    fullName:['',Validators.required],
    Email: ['',Validators.required],
  
     new_password: [''],
      confirm_password: [''],
     
  

    
  }, {validator:PasswordValidator});
  ngOnInit(){

  }
  
}