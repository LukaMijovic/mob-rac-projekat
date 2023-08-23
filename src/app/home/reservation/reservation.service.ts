import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LogInService} from "../log-in/log-in.service";
import {ReservationDTO} from "../../domain/dto/reservationDTO";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private cusomterId: number;
  reservations: ReservationDTO[] = [];

  constructor(private http: HttpClient) {
    this.cusomterId = Number(localStorage.getItem("userId"));
  }


  getAllReservations(): Observable<ReservationDTO[]> {
    const url = `http://localhost:8090/api/booking/v2/get-all/requested/${this.cusomterId}`;

    const myToken = `Bearer ${localStorage.getItem("token")}`;
    let headers = new HttpHeaders().set("Authorization", myToken).set("Content-Type", "application/json");

    return this.http.get<ReservationDTO[]>(url, {headers: headers}).pipe(
      map(resData => {
        console.log("Dobio odgovor!");
        return resData;
      })
    );
  }

  cancelReservation(id: number) {
    const url = `http://localhost:8090/api/booking/v1/cancel/${id}`;

    const myToken = `Bearer ${localStorage.getItem("token")}`;
    let headers = new HttpHeaders().set("Authorization", myToken).set("Content-Type", "application/json");

    return this.http.put<GetResponse>(url,{}, {headers: headers}).pipe(
      map(resData => {
        console.log(resData.id);
        return resData.success;
      })
    );
  }
  buyReservation(id: number) {
    const url = `http://localhost:8090/api/booking/v1/pay/${id}`;

    const myToken = `Bearer ${localStorage.getItem("token")}`;
    let headers = new HttpHeaders().set("Authorization", myToken).set("Content-Type", "application/json");

    return this.http.put<GetResponse>(url, {}, {headers: headers}).pipe(
      map(resData => {
        return resData.success;
      })
    );
  }

  getAllBoughtTickets(id: number) {
    const url = `http://localhost:8090/api/booking/v1/get-all/paid/${id}`;

    const myToken = `Bearer ${localStorage.getItem("token")}`;
    let headers = new HttpHeaders().set("Authorization", myToken).set("Content-Type", "application/json");

    return this.http.get<ReservationDTO[]>(url, {headers: headers}).pipe(
      map(resData => {
        return resData;
      })
    );
  }
}

interface GetResponse {
  id: number,
  success: boolean
}
