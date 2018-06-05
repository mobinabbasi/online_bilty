import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profilepopover',
  templateUrl: 'profilepopover.html',
})
export class ProfilepopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  close(val) {
    this.viewCtrl.dismiss(val);
  }

}
