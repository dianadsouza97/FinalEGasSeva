import { Registration } from './../registration/registration.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Employee{
  constructor(
    public name:string,
    public email:string,
    public contact:string,
    public zipcode:number,
    public city:string,
    public state:string,
    public country:string,
    public agency:string,
    public password:string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     

     getEmployees()
  {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    console.log("test call");
    return this.httpClient.get<Employee[]>('http://b8java19.iiht.tech:2222/employees',{headers});
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>("http://b8java19.iiht.tech:2222/employees" + "/"+ employee.empId);
  }

  public createEmployee(employee) {
    console.log(employee);
    return this.httpClient.post<Employee>("http://localhost:8080/employees", employee);
  }

  public registerUser(user){
    console.log(user);
    return this.httpClient.post<Registration>("http://b8java19.iiht.tech:2222/customer/register",user);
  }

getHeaders(){
  let username='admin'
  let password='admin'

  let  basicString='Basic '+window.btoa(username + ':' + password)
  return basicString;
}

}