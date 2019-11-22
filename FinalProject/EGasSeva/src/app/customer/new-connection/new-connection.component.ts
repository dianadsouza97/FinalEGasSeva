import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-new-connection',
  templateUrl: './new-connection.component.html',
  styleUrls: ['./new-connection.component.css']
})
export class NewConnectionComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  
  
    newconnection=this.fb.group({
      fullName:['', Validators.required],
      Dob:new FormControl(''),
      CustomerContactNo: ['', Validators.required],
      Distributor:['', Validators.required],
      Email: ['', Validators.required],
      State:['', Validators.required],
      District:['', Validators.required],

     
     
        
    })
    ngOnInit(){

    }
    
  }



    
  