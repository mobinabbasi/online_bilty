import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import {ServiceProvider} from '../../providers/service/service';
import {RegisteredPage} from '../registered/registered';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private service: ServiceProvider,
    public navParams: NavParams) {

  }

  register(){
    this.navCtrl.push('RegisteredPage');
    
  }

  cust(a){
    //this.navCtrl.setRoot('LoginPage');
    this.navCtrl.push(RegisteredPage, {a: a});
    console.log(a);
  }

  trans(b){
     this.navCtrl.push(RegisteredPage);
  }

}
