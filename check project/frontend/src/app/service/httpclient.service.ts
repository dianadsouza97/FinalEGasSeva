import { Message } from './../chat/chat-dialog/chat.service';
import { Zipcode } from './../zipcode.model';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Registration } from '../home-page-signup/registration.model';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Product } from '../customer/product-list/product.model';
import { retry, catchError } from 'rxjs/operators';
import { Cart } from '../customer/cart/cart.model';

import { Phone } from '../customer/online-booking/phone.model';

import { Login } from '../login/login.model';

export class Customer {

  constructor(
    public name: string,
    public email: string,
    public contact: string,
    public zipcode: number,
    public city: string,
    public state: string,
    public country: string,
    public agency: string,
    public password: string
  ) { }
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  message = [];
  private url: string;
  private token: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.url = 'http://localhost:3000/api/register';

    this.route.queryParams.subscribe(params => {
      this.token = params['token'];

    });
    // console.log("token"+this.token)
  }

  getzipcode(value) {
    console.log(value)
    return this.httpClient.get<Zipcode>("http://signinsignup-env-1.ak3v647yrs.us-east-2.elasticbeanstalk.com/zipcode" + "/" + value);
  }

  public createCustomer(customer) {
    console.log(customer);
    return this.httpClient.post<Customer>("http://localhost:3001/customers", customer);
  }

  public registerUser(user: Registration) {
    return this.httpClient.post<Registration[]>(this.url, user, this.httpOptions)
  }

  public loginUser(user: Login) {
    return this.httpClient.post<Login>("http://localhost:5001/login", user, this.httpOptions)
  }

  getHeaders() {
    let username = 'admin'
    let password = 'admin'

    let basicString = 'Basic ' + window.btoa(username + ':' + password)
    return basicString;
  }

  /* Email Confirmation */

  public confirmAccount() {
    return this.httpClient.get<[]>("http://localhost:3000/api/confirm-account" + "?token=" + this.token).subscribe(data => {
      this.message = data;
      console.log("string is :" + this.message)
    })
  }

  public getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3002/api/list");
  }

  /* Loading Items from Cart */
  public getItems(): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>("http://localhost:3002/api/GoToCart");
  }

  /** Adding to Cart */
  public addToCart(product: Product) {
    console.log(product);
    return this.httpClient.post<Product>("http://localhost:3002/api/cart", product, this.httpOptions)
      .subscribe(
        success => console.log("Done"),
        error => alert(error)
      );
  }

  public updateCart(prodid: number, quant: number): Observable<any> {
    console.log("cartService =" + prodid, quant)
    return this.httpClient.get<any>("http://localhost:3002/api/updateCart?id=" + prodid + "&quantity=" + quant)
  }

  public delCart(id: number) {
    console.log("del id in cartService" + id)
    return this.httpClient.get<any>("http://localhost:3002/api/delCart?id=" + id)
  }

  /** Deleting Items From Cart */
  // public deleteItem(item){
  //   return this.httpClient.delete<Product>('http://localhost:3002/api' + '/' + item.id, this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

  /** Handeling Error */
  //   handleError(error) {
  //     let errorMessage = '';
  //     if(error.error instanceof ErrorEvent) {
  //       // Get client-side error
  //       errorMessage = error.error.message;
  //     } else {
  //       // Get server-side error
  //       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //     }
  //     window.alert(errorMessage);
  //     return throwError(errorMessage);
  //  }



  getCustomerData(email) {
    return this.httpClient.get<Customer>("http://localhost:1234/getCustomerData" + "/" + email);
  }

  sendSms(onlineBooking) {
    let message = "Registration successful";
    var num = onlineBooking.contact;

    var phoneNumber = num;
    let number = new Phone(phoneNumber, message);
    console.log(number);
    //return this.httpClient.post("http://localhost:8081/api/v1/sms", number);
    console.log(onlineBooking);
    return this.httpClient.post("http://localhost:1234/onlineBookings", onlineBooking);
  }


  transferConnection(transferConnection){
    return this.httpClient.post("http://localhost:1234/transferLocation",transferConnection);
  }


}