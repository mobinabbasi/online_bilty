import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,App} from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  public info:any;
  public Type: any;
  private Search:FormGroup;

 //constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBulider:FormBuilder,
     public menuCtrl: MenuController,public app: App) {

    const data = JSON.parse(localStorage.getItem('Data'));
    this.info = data;
    console.log(this.info);
    
    if(this.info.user_type === "2") {
     this.Type = "Customer";
    } else {
      this.Type = "Transporater";
    }

    this.Search = formBulider.group({
      date:['',Validators.compose([Validators.required])],
      material:['',Validators.compose([Validators.required])],
      from_location:['',Validators.compose([Validators.required])],
      to_location:['',Validators.compose([Validators.required])],
    })

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

  ProfilePage() {
    this.navCtrl.push('ProfilePage', {
      id: this.info.user_id,
      number: this.info.user_phonenum,
      info: this.info
    })
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  search_upt() {
    console.log(this.Search.value);
  }
  

}
