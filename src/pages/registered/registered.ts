import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceProvider} from '../../providers/service/service';
import {EmailValidator} from '../../validator/email';





@IonicPage()
@Component({
  selector: 'page-registered',
  templateUrl: 'registered.html',
})
export class RegisteredPage {
  public SignUpForm: FormGroup;
  loading: Loading;
  private Cust : FormGroup;
  type : any;
  
  constructor(public navCtrl: NavController, public service: ServiceProvider,
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {

      this.type = navParams.get('a');
      this.type = navParams.get('b');
      // console.log(this.type);
      this.Cust = formBuilder.group({
        user_phonenum : ['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])]
      });
      // this.SignUpForm = formBuilder.group({
      //   name:['', Validators.compose([Validators.required, Validators.minLength(3)])],
      //   email:['', Validators.compose([Validators.required, EmailValidator.isValid])],
      //   password:['', Validators.compose([Validators.required, Validators.minLength(8)])],
      //   confirmpass:['', Validators.compose([Validators.required, Validators.minLength(8)])],
      //   number:['', Validators.compose([Validators.required,Validators.minLength(10)])],
      //   //checkBox: ['', Validators.compose([checkbox checked validation])]
      // });
  }

  // SignUp() {
  //   if (this.SignUpForm.valid) {
  //     this.loading = this.loadingCtrl.create();
  //     this.loading.present();
  //   }
  // }

  
  NewCust() {
    this.service.addCust(this.Cust.value, this.type);
    }

  // loginWithFB() {
  //   this.service.loginWithFB();
  // }
  
}
