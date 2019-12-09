import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientService, Customer } from 'src/app/service/httpclient.service';
import { OnlineBooking } from './online-booking.model';
@Component({
  selector: 'app-online-booking',
  templateUrl: './online-booking.component.html',
  styleUrls: ['./online-booking.component.css']
})
export class OnlineBookingComponent implements OnInit {
  constructor( private httpClientService: HttpClientService,private fb: FormBuilder) { }
  cust: Customer = new Customer("", "", "", 0,"","","","","");

  
  
    gasbooking=this.fb.group({
      fullName:[{value:'', disabled:true},Validators.required],
      email: [{value:'', disabled:true},Validators.required],
      contact: [{value:'', disabled:true},Validators.required],
      gasAgency: [{value:'', disabled:true},Validators.required],
      
      adhaarNo: ['',Validators.required],
    
        country: [{value:'', disabled:true},Validators.required],             
        city: [{value:'', disabled:true},Validators.required],
        state: [{value:'', disabled:true},Validators.required],
        zip: [{value:'', disabled:true},Validators.required]
      
    })
    ngOnInit() {
      var email="diana@gmail.com";
      this.httpClientService.getCustomerData(email)
        .subscribe(data => {
          console.log(data);
          this.cust=data;
        })
  
    }
    sendSms() {
      let name = this.gasbooking.controls['fullName'].value;
  
      let email = this.gasbooking.controls['email'].value;
      let contact = this.gasbooking.controls['contact'].value;
      let agency = this.gasbooking.controls['gasAgency'].value;
  
      let adhaar = this.gasbooking.controls['adhaarNo'].value;
      let country = this.gasbooking.controls['country'].value;
      let state = this.gasbooking.controls['state'].value;
      let city = this.gasbooking.controls['city'].value;
      let zip = this.gasbooking.controls['zip'].value;
  
      let onlineBooking = new OnlineBooking(email, name, contact, agency,adhaar, country,state,city, zip);
      console.log(onlineBooking);
      this.httpClientService.sendSms(onlineBooking)
        .subscribe(data => {
          alert("Booked successfully.");
        })
    }
  
  }
  
  
  
  
  





