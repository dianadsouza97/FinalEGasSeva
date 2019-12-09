
import { Phone } from './../customer/online-booking/phone.model';
import { OnlineBooking } from './../customer/online-booking/online-booking.model';
import { Zipcode } from './../zipcode.model';
import { Registration } from './../registration/registration.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from 'querystring';

export class Employee {
  constructor(
    public name: string,
    public email: string,
    public contact: string,
    public zipcode: number,
    public city: string,
    public state: string,
    public country: string,
    public agency: string,
    public password:string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }



  getzipcode(value) {
    return this.httpClient.get<Zipcode>("http://localhost:8080/zipcode" + "/" + value);
  }



  public createEmployee(employee) {
    console.log(employee);
    return this.httpClient.post<Employee>("http://localhost:8080/employees", employee);
  }

  public registerUser(user) {
    console.log(user);
    return this.httpClient.post<Registration>("http://b8java19.iiht.tech:2222/customer/register", user);
  }

  getHeaders() {
    let username = 'admin'
    let password = 'admin'

    let basicString = 'Basic ' + window.btoa(username + ':' + password)
    return basicString;
  }

  
getCustomerData(email){
  return this.httpClient.get<Employee>("http://localhost:8083/getCustomerData"+"/"+email);
}

  sendSms(onlineBooking) {
    let message = "Registration successful";
    var num = onlineBooking.contact;

    var phoneNumber = num;
    let number = new Phone(phoneNumber, message);
    console.log(number);
    //return this.httpClient.post("http://localhost:8081/api/v1/sms", number);
    console.log(onlineBooking);
    return this.httpClient.post("http://localhost:8083/onlineBookings",onlineBooking);
  }
}