import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  public isLogedIn:boolean = false;

  constructor() { }

  public logIn(email:string, password:string):void {
    console.log("Uspensa forma: " + email + " " + password);

    //ovde cu pozivati SO sa servera

    this.isLogedIn = true;
  }
}
