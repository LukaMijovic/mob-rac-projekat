import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
    this.cusomterId = LogInService.getUserId();
  }

  cancelReservation(id: number) {
    const url = `http://localhost:8090/api/booking/v1/cancel/${id}`;

    return this.http.put<GetResponse>(url,{}).pipe(
      map(resData => {
        console.log(resData.id);
        return resData.success;
      })
    );
  }

  getAllReservations(): Observable<ReservationDTO[]> {
    const url = `http://localhost:8090/api/booking/v2/get-all/${this.cusomterId}`;

    return this.http.get<ReservationDTO[]>(url).pipe(
      map(resData => {
        console.log("Dobio odgovor!");
        return resData;
      })
    );
  }
}

interface GetResponse {
  id: number,
  success: boolean
}
