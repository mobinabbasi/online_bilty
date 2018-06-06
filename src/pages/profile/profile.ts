import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, PopoverController } from 'ionic-angular';
import { ProfilepopoverPage } from '../profilepopover/profilepopover';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  [x: string]: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public popoverCtrl: PopoverController) {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('ProfilepopoverPage');
    popover.onDidDismiss( val => this.popovervalue = val);
    popover.present({
      ev: myEvent
    });
  }

}
