import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  //constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {}
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public menuCtrl: MenuController,public app: App) {
    const data = JSON.parse(localStorage.getItem('Data'));
    this.info = data;
    console.log(this.info);
    
    if(this.info.user_type === "2") {
     this.Type = "Customer";
    } else {
      this.Type = "Transporater";
    }

  }

  backToWL() {
    // let root = this.app.getRootNav();
    // root.setRoot();
   // this.menuCtrl.enable(false);
    this.navCtrl.setRoot(HomePage);
  }

  _Logout() {
    // const root = this.app.getRootNav();
    // root.popToRoot();
    //this.navCtrl.setRoot('HomePage');
    localStorage.clear();
    this.menuCtrl.enable(false);
    setTimeout(() => this.backToWL(),500);
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
  
}
