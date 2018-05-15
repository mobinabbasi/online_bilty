import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Facebook , FacebookLoginResponse} from '@ionic-native/facebook';
import {ServiceProvider} from '../../providers/service/service';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import {RegisteredPage} from '../../pages/registered/registered';





@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userlist: any;
  cust_phn: any;
  password: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public http: HttpClient,
    public service: ServiceProvider,
  public afAuth:AngularFireAuth) {

    

  }
  register() {
    this.navCtrl.setRoot(RegisteredPage);
  }

  // getUsers() {
  //   this.service.getUsers().then(data => {
  //     this.userlist = data;
  //     console.log(this.userlist);
  //   },error => {
  //     console.log(error);
  //   })
  // }

  loginWithFB() {
    this.service.loginWithFB();
  }
}
