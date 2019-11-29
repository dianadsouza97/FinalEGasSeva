import { HttpClientService } from './../../service/httpclient.service';
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

  gasbooking = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.maxLength(5), Validators.minLength(3)]),
    email: new FormControl('', [Validators.required]),

    contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    gasAgency: new FormControl('', [Validators.required]),
    adhaarNo: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required])

    
  })
  ngOnInit() {

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
        alert("Message sent successfully.");
      })
  }

}




