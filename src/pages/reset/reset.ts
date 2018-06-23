import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http , Response} from '@angular/http';
import {HomePage} from '../home/home';



@IonicPage()
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {
  number:any;
  type: any;
private Reset: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,
    public alertCtrl: AlertController, public toast: ToastController,public alert: AlertController,
  public http: Http) {


      this.Reset = formBuilder.group({
        pass: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
        confirm_pass: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])]
      })
      this.number = this.navParams.get('number');
      this.type = this.navParams.get('type');
      console.log(this.number);
      console.log(this.type);

  }

  reset_pass() {
    let API = `http://www.onlinebilty.com/webservices/reset_password?type=${this.type}&phonenumber=${this.number}&user_password=${this.Reset.value.confirm_pass}`;
        //console.log(API);
        if(this.Reset.value.confirm_pass === this.Reset.value.pass) {
          this.http.get(API).subscribe((data:Response) => {
              let res = data.json();
              console.log(res);
              
              if(res.status == "Failed") {
                    //console.log('already register');
                    let alert = this.alert.create({
                      title: 'Existence',
                      subTitle: 'Role Not Existing!',
                      message: 'Please Try Again!',
                      buttons: [{
                        text: "OK",
                        handler: () => { this.navCtrl.setRoot('LoginPage' ,{
                          type: this.type
                        }) }
                        //handler: () => { this.navCtrl.setRoot(HomePage); }
                      }],
                    });
                    alert.present();
                    } else {
                let alert = this.alertCtrl.create({
                     title: 'Done',
                     subTitle: 'Password has been reset.!',
                     buttons: [{
                      text: "OK",
                      handler: () => { this.navCtrl.setRoot('LoginPage' ,{
                        type: res.user_type
                      }) }
                     }]
                  });
                    alert.present();
                    }
                  })
        } else {
            let toast = this.toast.create({
            message: 'Password Does\'t Match!',
            duration: 3000,
            position: 'top'
          });
        toast.present();
        }

  }
}
