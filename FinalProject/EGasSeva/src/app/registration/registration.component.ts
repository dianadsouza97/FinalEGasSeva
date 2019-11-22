import { Registration } from './registration.model';
import { Employee } from './../service/httpclient.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { HttpClientService } from '../service/httpclient.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user : Registration=new Registration("","","",true);
  constructor(private fb: FormBuilder,private httpClientService: HttpClientService) {
    
   
   }
  // returning the reference of form input fields

  
  //resolved(captchaResponse: string) {
    //console.log(`Resolved captcha with response: ${captchaResponse}`);
  //}

  ngOnInit() {
  }
  register(): void {
    console.log(this.user);
    this.httpClientService.registerUser(this.user)
        .subscribe( data => {
          alert("Employee created successfully.");
        });
}
}