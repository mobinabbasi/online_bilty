import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {

  private set_password: FormGroup;
  public info: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    public formBuilder: FormBuilder,public alert: AlertController) {
    // this.number = navParams.get('Number');
    // this.type = navParams.get('type');
    // console.log(this.type);
    // console.log(this.number);
    this.info = navParams.get('info');
    console.log(this.info);

    this.set_password = formBuilder.group({
      old_password: ['', Validators.compose([Validators.required])],
      pass:['', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(20)])],
      confirm_pass:['', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(20)])]
    })
  }

  set_pass() {
    let API= `http://mobitplus.com/onlinebilty/webservices/change_password?phonenumber=${this.info.user_phonenum}&user_id=${this.info.user_id}&type=${this.info.user_type}&user_password=${this.set_password.value.old_password}&new_password=${this.set_password.value.confirm_pass}`;
    if(this.set_password.value.confirm_pass === this.set_password.value.pass) {
      return this.http.get(API).subscribe((res) => {
        let set = res.json();
        //localStorage.setItem('Data',JSON.stringify(set));
        //this.navCtrl.setRoot('SearchPage');
         console.log(set);

        let alert = this.alert.create({
          title: 'Done',
          subTitle: 'Password has been Change.',
          buttons: ['OK']
        });
        alert.present();
      })
    }
    let alert = this.alert.create({
      title: 'Password Mis-Match',
      message: 'Please Try Again!',
      buttons: ['OK']
    })
    alert.present();
  }


  showAlert() {
    let alert = this.alert.create({
      title: 'Done',
      subTitle: 'Password has been reset.',
      buttons: ['OK']
    });
    alert.present();
  }

}
