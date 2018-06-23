import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
//import {}

@IonicPage()
@Component({
  selector: 'page-profilepopover',
  templateUrl: 'profilepopover.html',
})
export class ProfilepopoverPage {
public info:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    const data = JSON.parse(localStorage.getItem('Data'));
    this.info = data;
    console.log(this.info);
  }

  password() {
    this.navCtrl.push('ResetpasswordPage',{
      info: this.info
    })
  }

  close(val) {
    this.viewCtrl.dismiss(val);
  }

}
