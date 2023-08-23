import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LogInService} from "../log-in/log-in.service";
import {ReservationDTO} from "../../domain/dto/reservationDTO";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  public headers: HttpHeaders = new HttpHeaders().append('Authorization', `Bearer ${LogInService.token}`);
  private cusomterId: number;
  reservations: ReservationDTO[] = [];

  constructor(private http: HttpClient) {
    this.cusomterId = LogInService.getUserId();
  }


  getAllReservations(): Observable<ReservationDTO[]> {
    const url = `http://localhost:8090/api/booking/v2/get-all/requested/${this.cusomterId}`;

    return this.http.get<ReservationDTO[]>(url, {headers: this.headers}).pipe(
      map(resData => {
        console.log("Dobio odgovor!");
        return resData;
      })
    );
  }

  cancelReservation(id: number) {
    const url = `http://localhost:8090/api/booking/v1/cancel/${id}`;

    return this.http.put<GetResponse>(url,{}, {headers: this.headers}).pipe(
      map(resData => {
        console.log(resData.id);
        return resData.success;
      })
    );
  }
  buyReservation(id: number) {
    const url = `http://localhost:8090/api/booking/v1/pay/${id}`;

    return this.http.put<GetResponse>(url, {}, {headers: this.headers}).pipe(
      map(resData => {
        return resData.success;
      })
    );
  }

  getAllBoughtTickets(id: number) {
    const url = `http://localhost:8090/api/booking/v1/get-all/paid/${id}`;

    return this.http.get<ReservationDTO[]>(url, {headers: this.headers}).pipe(
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
