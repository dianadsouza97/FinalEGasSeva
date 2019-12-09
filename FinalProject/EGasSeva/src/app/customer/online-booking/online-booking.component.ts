import { HttpClientService, Employee } from './../../service/httpclient.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup} from '@angular/forms';
import { OnlineBooking } from './online-booking.model';
@Component({
  selector: 'app-online-booking',
  templateUrl: './online-booking.component.html',
  styleUrls: ['./online-booking.component.css']
})
export class OnlineBookingComponent implements OnInit {
  constructor( private httpClientService: HttpClientService) { }

  cust: Employee = new Employee("", "", "", 0,"","","","","");

  gasbooking = new FormGroup({
    fullName: new FormControl({value:'', disabled:true}, [Validators.required]),
    email: new FormControl({value:'', disabled:true}, [Validators.required]),

    contact:new FormControl({value:'', disabled:true}, [Validators.required]),
    gasAgency:new FormControl({value:'', disabled:true}, [Validators.required]),
    adhaarNo: new FormControl('', [Validators.required]),
    country:new FormControl({value:'', disabled:true}, [Validators.required]),
    city:new FormControl({value:'', disabled:true}, [Validators.required]),
    state:new FormControl({value:'', disabled:true}, [Validators.required]),
    zip: new FormControl({value:'', disabled:true}, [Validators.required])

    
  })
  ngOnInit() {
    var email="diana@gmail.com";
    this.httpClientService.getCustomerData(email)
      .subscribe(data => {
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




