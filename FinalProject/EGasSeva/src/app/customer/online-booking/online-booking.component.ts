import { Component, OnInit } from '@angular/core';
7731875629
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-online-booking',
  templateUrl: './online-booking.component.html',
  styleUrls: ['./online-booking.component.css']
})
export class OnlineBookingComponent  {
  constructor(private fb: FormBuilder) { }
  
  
    gasbooking=this.fb.group({
      fullName:['',Validators.required],
      Email: ['',Validators.required],
      Dob:new FormControl(''),
      CustomerContactNo: new FormControl(''),
      GasAgency: ['',Validators.required],
      
      Adhaarno: ['',Validators.required],
      CustomerAddress: this.fb.group({
        street: [''],             
        city: [''],
        state: [''],
        zip: ['']
      })
    })
    ngOnInit(){

    }
    
  }



    
  