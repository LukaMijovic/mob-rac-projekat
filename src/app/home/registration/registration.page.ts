import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UserDTO} from "../../domain/dto/userDTO";
import {RegistrationService} from "./registration.service";
import {AlertController} from "@ionic/angular";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  @ViewChild("registrationForm", {static: true}) form!: NgForm;
  @Input() firstName: string = "";
  @Input() lastName: string = "";
  @Input() email: string = "";
  @Input() phone: string = "";
  @Input() username: string = "";
  @Input() password: string = "";
  @Input() birthday: Date = new Date();
  @Input() country: string = "";
  @Input() city: string = "";



  constructor(private registrationService: RegistrationService, private alertController: AlertController) { }

  ngOnInit() {
  }


  registration() {
    const user: UserDTO = new UserDTO(
      this.form.value["firstName"],
      this.form.value["lastName"],
      this.form.value["username"],
      this.form.value["password"],
      this.form.value["email"],
      this.form.value["phone"],
      this.form.value["birthday"],
      this.form.value["country"],
      this.form.value["city"]
    );

    this.registrationService.register(user).subscribe(
      async res => {
        if (res != null) {
          const alert = await this.alertController.create({
            header: 'Success!',
            subHeader: 'Registration successful',
            message: 'You have been registered successfully.',
            buttons: ['OK'],
          });

          await alert.present();
        }
      }
    );
  }

}
