import { Injectable } from '@angular/core';
import {UserDTO} from "../../domain/dto/userDTO";
import {HttpClient} from "@angular/common/http";
import {CustomerDTO} from "../../domain/dto/customerDTO";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  register(user: UserDTO) {
    const url = `http://localhost:8090/api/customer/v1/registration`;

    console.log(user);

    return this.http.post<CustomerDTO>(url, user).pipe(
      map(resData => {
        return resData;
      })
    );
  }
}
