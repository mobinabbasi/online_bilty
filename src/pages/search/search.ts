import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  public info:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    const data = JSON.parse(localStorage.getItem('Data'));
    this.info = data;
    console.log(this.info);

  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
  

}
