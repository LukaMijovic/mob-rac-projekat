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
  private static username: string;

  public static token: string;

  constructor(private http: HttpClient) {
  }

  public static getUserId(): number {
   return LogInService.userId;
  }

  public static setUserId(id: number) {
    LogInService.userId = id;
  }

  public static getUsername(): string {
    return LogInService.username;
  }

  public logIn(email:string, password:string) {
    console.log("Uspensa forma: " + email + " " + password);

    const url = "http://localhost:8090/api/auth/v1/login";

    let customer = new CustomerLogIn(email, password);
    //let customerDTO: CustomerDTO = new CustomerDTO();
    console.log("Spremam se da posaljem request");
    return this.http.post<GetLogInResponse>(url, customer)
      .pipe(
        map((resData) => {
          console.log(resData);
          console.log(resData.customerDTO)
          console.log(resData.token)

          const dto = resData.customerDTO;
          LogInService.token = resData.token;
          LogInService.userId = dto.id;
          LogInService.username = dto.username;

          this.isLoggedIn = true;

          return new CustomerDTO(
            dto.id,
            dto.username,
            dto.email,
            dto.password,
            dto.phone,
            dto.firstName,
            dto.lastName,
            dto.birthDate,
            dto.city,
            dto.country,
            dto.accountStatus,
            dto.registrationTime,
            dto.lastEditTime
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

  logOut() {
    this.isLoggedIn = false;
    LogInService.setUserId(-1);
  }
}

interface GetLogInResponse {
  customerDTO: CustomerDTO,
  token: string
}
