import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Customer, HttpClientService } from 'src/app/service/httpclient.service';
import { Transferconnection } from './transferconnection.model';
import { Zipcode } from 'src/app/zipcode.model';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  gasbooking: FormGroup;
  zip: Zipcode = new Zipcode("", "", "", "","");
  constructor(private httpClientService: HttpClientService, private fb: FormBuilder) { }
  cust: Customer = new Customer("", "", "", 0, "", "", "", "", "");


 
  


  ngOnInit() {
    var email = "diana@gmail.com";
    this.httpClientService.getCustomerData(email)
      .subscribe(data => {
        this.cust = data;
      })

      
  this.gasbooking = this.fb.group({
    fullName: [{ value: '', disabled: true }, Validators.required],
    email: [{ value: '', disabled: true }, Validators.required],
    gasAgency: [{value:'', disabled:true},Validators.required],

    newGasAgency: [{ value: '', disabled: true }, Validators.required],
    contact:[{ value: '', disabled: true }, Validators.required],
  
    adhaarNo: ['', Validators.required],
    country: [{value:'', disabled:true},Validators.required],             
    city: [{value:'', disabled:true},Validators.required],
    state: [{value:'', disabled:true},Validators.required],
    zip: [{value:'', disabled:true},Validators.required],
  
    newCountry: [{ value: '', disabled: true }, Validators.required],
    newCity: [{ value: '', disabled: true }, Validators.required],
    newState: [{ value: '', disabled: true }, Validators.required],
    newZip: ['', Validators.required],
    newAgency:  [{ value: '', disabled: true }, Validators.required]

    
  })
  this.gasbooking.get('newZip').valueChanges.subscribe(value=>{
    this.getzipcode(value);
  })
  }


  getzipcode(value) {
    this.httpClientService.getzipcode(value).subscribe(data => {
      this.zip = data;
    })
  }

  transferConnection() {
    let name = this.gasbooking.controls['fullName'].value;

    let email = this.gasbooking.controls['email'].value;
    let newGasAgency = this.gasbooking.controls['newAgency'].value;

    let adhaarNo = this.gasbooking.controls['adhaarNo'].value;
    let country = this.gasbooking.controls['newCountry'].value;
    let state = this.gasbooking.controls['newState'].value;
    let city = this.gasbooking.controls['newCity'].value;
    let zip = this.gasbooking.controls['newZip'].value;

    let transferConnection = new Transferconnection(email, name, newGasAgency,adhaarNo, country,state,city, zip);
    this.httpClientService.transferConnection(transferConnection)
    .subscribe(data => {
      alert("Registered Successfully");
    })

  }
}

