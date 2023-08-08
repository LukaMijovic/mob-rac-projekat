import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {CustomerLogIn} from "../../domain/customer";

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  public isLoggedIn:boolean = false;

  constructor(private http: HttpClient) { }

  public logIn(email:string, password:string):void {
    console.log("Uspensa forma: " + email + " " + password);

    const url = "localhost:8090/api/customer/v1/login";

    let customer = new CustomerLogIn(email, password);
    let res = this.http.post<CustomerLogIn>(url, customer);

    //ovde cu pozivati SO sa servera

    let customerDTO;
    res.subscribe(response => {
      customerDTO = response;
    });

    //// @ts-ignore
    // if (customerDTO.getFirstName() != "" || customerDTO.getFirstName() != null) {
    //   this.isLoggedIn = true;
    // }

    this.isLoggedIn = true;
  }
}
