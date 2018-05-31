import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,App} from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  public info:any;
  public Type: any;

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
