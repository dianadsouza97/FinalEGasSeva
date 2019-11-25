import { CountriesService } from './../countries.service';
import { Employee } from './../service/httpclient.service';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClientService } from '../service/httpclient.service';

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

  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  constructor(private _formBuilder: FormBuilder, private httpClientService: HttpClientService,private country:CountriesService
  ) { }

  ngOnInit() {
    this.getCountries();
    /*  
 
     this.firstFormGroup = this._formBuilder.group({
       name: ['', Validators.required,Validators.maxLength(5)],
       email: ['', Validators.required],
       contact: ['', Validators.required]
        this.secondFormGroup = this._formBuilder.group({
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      agency: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      password: ['', Validators.required]
    }); */

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
    this.thirdFormGroup = this._formBuilder.group({
      password: ['', Validators.required]
    });


    //onchange autopopulate
    this.secondFormGroup.get('zipcode').valueChanges.subscribe(value=>{
        console.log(value);
        console.log('Data:', this.countryInfo);

        this.stateInfo = this.countryInfo[value].States;
        this.cityInfo = this.stateInfo[0].Cities;
        console.log(this.cityInfo);
    })


  }
  public hasError1 = (controlName: string, errorName: string) => {
    return this.firstFormGroup.controls[controlName].hasError(errorName);
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



  getCountries() {
    this.country.allCountries().
      subscribe(
        data2 => {
          this.countryInfo = data2.Countries;
         // console.log('Data:', this.countryInfo);
        },
        err => console.log(err),
        () => console.log('complete')
      )
  }

  onChangeCountry(countryValue) {
    console.log('Data:', this.countryInfo);

    this.stateInfo = this.countryInfo[countryValue].States;
    this.cityInfo = this.stateInfo[0].Cities;
    console.log(this.cityInfo);
  }

  onChangeState(stateValue) {
    this.cityInfo = this.stateInfo[stateValue].Cities;
    //console.log(this.cityInfo);
  }

}

