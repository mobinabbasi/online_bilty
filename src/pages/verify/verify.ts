import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {ServiceProvider} from '../../providers/service/service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Http } from '@angular/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
//import {PasswordPage} from '../../pages/password/password';

@IonicPage()
@Component({
  selector: 'page-verify',
  templateUrl: 'verify.html',
})
export class VerifyPage {
num : any;
user_type: any;
private OTP: FormGroup;
verfy_otp: any;
main_OTP: any;
update_OTP: any;



  constructor(public navCtrl: NavController, public navParams: NavParams
  ,public formBuilder: FormBuilder,public service: ServiceProvider,public http:Http,public alert: AlertController
) {
    this.num =  navParams.get('Number');
    this.user_type =  navParams.get('type');
    this.main_OTP =  navParams.get('OTP');
    console.log( this.main_OTP );

    this.OTP =  formBuilder.group({
      otp_verfy: ['', Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(5)])]
    })

  }
   

  verify_otp() {
    
    if(this.OTP.value.otp_verfy === this.main_OTP) {
      this.navCtrl.setRoot('PasswordPage',{
        Number: this.num,
        type:this.user_type
      });
      //console.log('sucessfull');
    } else {
      let alert = this.alert.create({
        title: 'OTP Wrong',
        message: 'Please Try Again!',
        buttons: ['OK']
      })
      alert.present();
    }
  }

  
  reSend() {
    let API = `http://mobitplus.com/onlinebilty/webservices/sendotp?type=${this.user_type}&phonenumber=${this.num}`;
    
    this.http.get(API).subscribe((res) => {
      let new_otp = res.json();
     // let New = new_otp.user_otp;
    // this.update_OTP = new_otp.user_otp
      console.log(new_otp);
    })
  }

}
