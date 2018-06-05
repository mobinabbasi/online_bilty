import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the MybookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mybookings',
  templateUrl: 'mybookings.html',
})
export class MybookingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: '<div class="user-head"><img src="../../assets/imgs/truck.png" class="img"> Ramesh & Dinesh Transport Co.</div>',
      subTitle: '<p><i class="fa fa-phone" aria-hidden="true"></i>+91-9445487256</p><p><i class="fa fa-envelope" aria-hidden="true"></i>ramesh@gmail.com</p><p><i class="fa fa-home" aria-hidden="true"></i>202/A, TT Nagar, bhopal</p>',
      cssClass: 'user-modal',
      buttons: ['OK']
    });
    alert.present();
  }

}
