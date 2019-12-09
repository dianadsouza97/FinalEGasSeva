import { Component, OnInit } from '@angular/core';

import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-query-from',
  templateUrl: './query-from.component.html',
  styleUrls: ['./query-from.component.css']
})
export class QueryFromComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  
  
  queryform=this.fb.group({
    fullName:['',Validators.required],
    Email: ['',Validators.required],
    CustomerContactNo: ['',Validators.required],
    query:new FormControl(''),

    
  })
  ngOnInit(){
    
  }
  myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  toggle(){
    document.getElementById("txtarea").style.display="block";
  }
  
}