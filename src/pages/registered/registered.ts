import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceProvider} from '../../providers/service/service';
import {EmailValidator} from '../../validator/email';
import { Observable } from "rxjs/Rx";
import { Http } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';




@IonicPage()
@Component({
  selector: 'page-registered',
  templateUrl: 'registered.html',
})
export class RegisteredPage {
  public SignUpForm: FormGroup;
  loading: Loading;
  private Cust : FormGroup;
  ty : any;
  public list : any;

  
  constructor(public navCtrl: NavController, public service: ServiceProvider,
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {

      this.Cust = formBuilder.group({
        user_phonenum : ['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])]
      });
  }

  
  NewCust() {
    let type;
    this.ty = this.navParams.get('a');
   // console.log(this.ty); 
        if(this.ty == 2) {
           type = this.ty;
        } else {
          type = 1;
        }
        
    this.service.addCust(this.Cust.value,type).subscribe((res: Response) => {
     // this.list = res;
      this.list = res.json();
     // console.log(this.list.user_otp
      //);
      if(this.list.status == "Success") {
        this.navCtrl.setRoot('VerifyPage',{
          Number: this.Cust.value.user_phonenum,
          type: type,
          OTP: this.list.user_otp
        });
      }
      //console.log(this.list.status);
     })
    
    }

    getData() {
      this.service.getUsers().then(data => {
        console.log(data);
      });
    }

  // loginWithFB() {
  //   this.service.loginWithFB();
  // }
  
}
