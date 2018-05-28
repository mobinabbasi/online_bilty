import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController, AlertController} from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Facebook , FacebookLoginResponse} from '@ionic-native/facebook';
import {ServiceProvider} from '../../providers/service/service';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import {RegisteredPage} from '../../pages/registered/registered';
import { FormBuilder , FormGroup , Validators} from '@angular/forms';
import { Http , Response} from '@angular/http';





@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userlist: any;
  cust_phn: any;
  password: any;
  user_type: any;
  private Login: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public http: Http,public Toast: ToastController,
    public service: ServiceProvider,public formBuilder: FormBuilder,public alert: AlertController,
  public afAuth:AngularFireAuth) {

    this.user_type = navParams.get('type');
    console.log(this.user_type);

    this.Login = formBuilder.group({
      number: ['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
      password : ['', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(20)])]
    })
    

  }

  _login() {
    let API = `http://mobitplus.com/onlinebilty/webservices/login?type=${this.user_type}&phonenumber=${this.Login.value.number}`;
    //if(this.Login.value.number)
    this.http.get(API)//.map(res => res.json())
    .subscribe((data: Response) => {
      let Data = data.json();

      if(Data.status == "Success") {

        if(this.Login.value.password === Data.user_password) {

          //this.navCtrl.setRoot('SearchPage');
          localStorage.setItem('Data',JSON.stringify(Data));
          this.navCtrl.setRoot('SearchPage');
          //console.log(user);
        } else {
          let Alert = this.alert.create({
            title: 'Password-Wrong',
            //subTitle: 'User Not Existing',
            message: 'Please Insert Correct Password!',
            buttons:['OK']
          });
          Alert.present();
        }

      } else {
      let Alert = this.alert.create({
      title: 'Existence',
      subTitle: 'User Not Existing',
      message: 'Please Register Firstly!',
      buttons:['OK']
    });
    Alert.present();
      }

      // if(Data.status == "Failed") {
      //   let Alert = this.alert.create({
      //     title: 'Existence',
      //     subTitle: 'User Not Existing',
      //     message: 'Please Register Firstly!',
      //     buttons:['OK']
      //   });
      //   Alert.present();
      // }
      // if(this.Login.value.password === Data.user_password) {
      //   console.log('success');
      // } else {
      //   let toast = this.Toast.create({
      //     message: 'Password Not Correct!',
      //     duration: 3000,
      //     position: 'top',
      //   });
      //   toast.present();
      // }
       console.log(Data);
    })
  }


  register() {
    this.navCtrl.setRoot(RegisteredPage);
  }

  forget_pass() {
    if(this.Login.value.number == '') {
       let toast = this.Toast.create({
        //title: 'Insert Number',
        message: 'Please Insert The Number.!',
        //buttons: ['OK']
        duration: 3000,
      position: 'top'

      });
      toast.present();
    } else {
      this.navCtrl.push('ResetPage', {
        type: this.user_type,
        number: this.Login.value.number
      })
    }
    
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
