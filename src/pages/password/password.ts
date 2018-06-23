import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SearchPage} from '../search/search';

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {
number: any;
type: any;
private set_password: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    public formBuilder: FormBuilder,public alert: AlertController) {
    this.number = navParams.get('Number');
    this.type = navParams.get('type');
    // console.log(this.type);
    // console.log(this.number);

    this.set_password = formBuilder.group({
      pass:['', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(20)])],
      confirm_pass:['', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(20)])]
    })
  }

  set_pass() {
    let setAPI = `http://www.onlinebilty.com/webservices/set_password?type=${this.type}&phonenumber=${this.number}&user_password=${this.set_password.value.confirm_pass}`;
    if(this.set_password.value.confirm_pass === this.set_password.value.pass) {
      return this.http.get(setAPI).subscribe((res) => {
        let set = res.json();
        localStorage.setItem('Data',JSON.stringify(set));
        this.navCtrl.setRoot(SearchPage);
        console.log(set);
      })
    }
    let alert = this.alert.create({
      title: 'Password Mis-Match',
      message: 'Please Try Again!',
      buttons: ['OK']
    })
    alert.present();
  }

}
