import { HttpClientService } from './../service/httpclient.service';
import { HttpClient } from '@angular/common/http';
import { Login } from './login.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message;
  user: Login = new Login("", "")

  constructor(private fb: FormBuilder, private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    console.log(this.user);
    this.httpClientService.loginUser(this.user)
      .subscribe(data => {
        this.message = data;
        console.log(data)
        if(data) {
          this.router.navigate(['/', 'customer'])
        }
        else {
          this.message = "Invalid email/password!"
        }
      });
  }
}