import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, PopoverController } from 'ionic-angular';
import { ProfilepopoverPage } from '../profilepopover/profilepopover';

@IonicPage({ priority: 'high', segment: 'tabs' })
@Component({
  selector: 'page-transprofile',
  templateUrl: 'transprofile.html',
})
export class TransprofilePage {

  [x: string]: any;
  tprofile = 'TprofilePage';
  vehicle = 'VehicleproPage';

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('ProfilepopoverPage');
    popover.onDidDismiss( val => this.popovervalue = val);
    popover.present({
      ev: myEvent
    });
  }

}
