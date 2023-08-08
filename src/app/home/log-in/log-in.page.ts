import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {LogInService} from "./log-in.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  @ViewChild("logInForm", {static: true}) form!: NgForm;
  public email:string;
  public password:string;

  constructor(private logInService: LogInService, private router: Router) {
    this.email = "";
    this.password = "";
  }

  ngOnInit() {
    this.email = "";
    this.password = "";
  }

  private setEmailAndPassword(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  public logIn():void {
    this.setEmailAndPassword(this.form.value["email"], this.form.value["password"]);
    console.log(this.email + ' ' + this.password);
    this.logInService.logIn(this.email, this.password);

    this.router.navigateByUrl("/home/flights");
  }
}
