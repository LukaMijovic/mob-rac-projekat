import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CustomerLogIn} from "../../domain/customer";
import {map} from "rxjs";
import {CustomerDTO} from "../../domain/dto/customerDTO";

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  public isLoggedIn:boolean = false;
  //public customerDTO: CustomerDTO | undefined;
  private static userId: number;

  constructor(private http: HttpClient) {
  }

  public static getUserId(): number {
   return LogInService.userId;
  }

  public logIn(email:string, password:string) {
    console.log("Uspensa forma: " + email + " " + password);

    const url = "http://localhost:8090/api/customer/v1/login";

    let customer = new CustomerLogIn(email, password);
    //let customerDTO: CustomerDTO = new CustomerDTO();
    console.log("Spremam se da posaljem request");
    return this.http.post<CustomerDTO>(url, customer)
      .pipe(
        map((resData) => {
          console.log("Usoa u MAP");

          LogInService.userId = resData.id;
          this.isLoggedIn = true;
          return new CustomerDTO(
            resData.id,
            resData.username,
            resData.email,
            resData.password,
            resData.phone,
            resData.firstName,
            resData.lastName,
            resData.birthDate,
            resData.city,
            resData.country,
            resData.accountStatus,
            resData.registrationTime,
            resData.lastEditTime
          );
        })
      );

    //ovde cu pozivati SO sa servera

    // let customerDTO;
    // res.subscribe(response => {
    //   console.log(response);
    // });


    //this.isLoggedIn = true;
  }
}
