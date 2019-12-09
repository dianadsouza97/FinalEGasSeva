import { FormBuilder } from '@angular/forms';
import { HttpClientService } from './../service/httpclient.service';
import { Registration } from './registration.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-signup',
  templateUrl: './home-page-signup.component.html',
  styleUrls: ['./home-page-signup.component.css']
})
export class HomePageSignupComponent implements OnInit {
  message : Array<Registration> ;
  user: Registration = new Registration("", "", "", true);
  constructor(private fb: FormBuilder, private httpClientService: HttpClientService) {
  }

  ngOnInit() {
  }
  register(): void {
    console.log(this.user);
    this.httpClientService.registerUser(this.user)
      .subscribe(data => {
        alert("Customer created successfully.");
        this.message = data;
          console.log(data)
      });
  }
}
