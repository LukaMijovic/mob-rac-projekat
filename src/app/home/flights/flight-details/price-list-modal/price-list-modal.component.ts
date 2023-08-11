import {Component, Input, OnInit} from '@angular/core';
import {AlertController, ModalController} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";
import {FlightsService} from "../../flights.service";
import {PriceListDTO} from "../../../../domain/dto/priceListDTO";
import {LogInService} from "../../../log-in/log-in.service";
import {PriceListServiceService} from "./price-list-service.service";

@Component({
  selector: 'app-price-list-modal',
  templateUrl: './price-list-modal.component.html',
  styleUrls: ['./price-list-modal.component.scss'],
})
export class PriceListModalComponent  implements OnInit {

  public priceList: PriceListDTO = {
    id: -1,
    economy: -2,
    economyPlus: -3,
    preferredEconomy: -4,
    business: -5,
    firstClass: -6
  };

  modalHeader: string = "";

  constructor(private alertController: AlertController, private priceListService: PriceListServiceService, private router: Router ,private modalCtrl: ModalController, private route: ActivatedRoute, private flightService: FlightsService) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(
    //   paramMap => {
    //     this.flightService.getClassPrices(paramMap.get('id')).subscribe(
    //       priceList => {
    //         this.priceList = priceList;
    //       }
    //     );
    //   }
    // );
    this.flightService.getClassPrices("" + FlightsService.flightId).subscribe(
      priceList => {
        this.priceList = priceList;
      }
    );
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }

  async presentAlert(isSucces: boolean) {
    if (isSucces) {
      const alert = await this.alertController.create({
        header: 'Success!',
        subHeader: 'Ticket reserved',
        message: 'Your ticket has been reserved.',
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Fail',
        subHeader: 'Ticket is not reserved',
        message: 'Your ticket has not been reserved.',
        buttons: ['OK'],
      });

      await alert.present();
    }

  }

  choosePrice(chosenClass: string) {
    this.priceListService.chosePrice(LogInService.getUserId(), FlightsService.flightId, chosenClass).subscribe(
      res => {
          this.presentAlert(res).then(() => this.onCancel());
      }
    );
  }
}
