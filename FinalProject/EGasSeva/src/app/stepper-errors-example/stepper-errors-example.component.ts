import { Employee } from './../service/httpclient.service';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClientService} from '../service/httpclient.service';

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
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private httpClientService: HttpClientService
  ) { }

  ngOnInit() {


    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      agency: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      password: ['', Validators.required]
    });
  }
  createCustomer() 
  {

    let name = this.firstFormGroup.controls['name'].value;
    
    let email = this.firstFormGroup.controls['email'].value;
    let contact = this.firstFormGroup.controls['contact'].value;
    let zipcode = this.secondFormGroup.controls['zipcode'].value;
    let city = this.secondFormGroup.controls['city'].value;
    let state = this.secondFormGroup.controls['state'].value;
    let country = this.secondFormGroup.controls['country'].value;
    let agency = this.secondFormGroup.controls['agency'].value;
    let password = this.thirdFormGroup.controls['password'].value;

    let employee = new Employee(email,name, contact, zipcode, city, state, country, agency, password);
    
    this.httpClientService.createEmployee(employee)
      .subscribe(data => 
        {
          alert("Employee created successfully.");
        }) 
      }
}

