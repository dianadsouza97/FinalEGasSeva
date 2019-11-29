
import { Employee } from './../service/httpclient.service';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClientService } from '../service/httpclient.service';
import { Zipcode } from '../zipcode.model';


/**
 * @title Stepper that displays errors in the steps
 */
@Component({
  selector: 'stepper-errors-example',
  templateUrl: 'stepper-errors-example.component.html',
  styleUrls: ['stepper-errors-example.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class StepperErrorsExampleComponent implements OnInit {
  zip:Zipcode=new Zipcode("","","","");
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  
  constructor( private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
   
   

    this.firstFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(5), Validators.minLength(3)]),
      email: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    });
    this.secondFormGroup = new FormGroup({
      zipcode:new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('',[Validators.required]),
      agency: new FormControl('', [Validators.required])
    });
    this.thirdFormGroup = new FormGroup({
      password: new FormControl('',[ Validators.required]),
      confirmPassword: new FormControl('',[ Validators.required])

    } );

    //onchange autopopulate
    this.secondFormGroup.get('zipcode').valueChanges.subscribe(value=>{
        this.getzipcode(value);
    })
    

  }
   // convenience getter for easy access to form fields

  
  public hasError1 = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
  }

getzipcode(value){
  this.httpClientService.getzipcode(value).subscribe(data=>{
    this.zip=data;
   
  })
}


  createCustomer() {

    let name = this.firstFormGroup.controls['name'].value;

    let email = this.firstFormGroup.controls['email'].value;
    let contact = this.firstFormGroup.controls['contact'].value;
    let zipcode = this.secondFormGroup.controls['zipcode'].value;
    let city = this.secondFormGroup.controls['city'].value;
    let state = this.secondFormGroup.controls['state'].value;
    let country = this.secondFormGroup.controls['country'].value;
    let agency = this.secondFormGroup.controls['agency'].value;
    let password = this.thirdFormGroup.controls['password'].value;

    let employee = new Employee(email, name, contact, zipcode, city, state, country, agency, password);

    this.httpClientService.createEmployee(employee)
      .subscribe(data => {
        alert("Employee created successfully.");
      })
  }

}

