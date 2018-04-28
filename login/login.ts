import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Facebook , FacebookLoginResponse} from '@ionic-native/facebook';
import {ServiceProvider} from '../../providers/service/service';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  // userData: any;
  // displayName;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public service: ServiceProvider,
  public afAuth:AngularFireAuth) {

  }

  loginWithFB() {
    this.service.loginWithFB();
  }
}
