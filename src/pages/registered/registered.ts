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

  constructor(public navCtrl: NavController, public service: ServiceProvider,
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {

      this.SignUpForm = formBuilder.group({
        name:['', Validators.compose([Validators.required, Validators.minLength(3)])],
        email:['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password:['', Validators.compose([Validators.required, Validators.minLength(8)])],
        confirmpass:['', Validators.compose([Validators.required, Validators.minLength(8)])],
        number:['', Validators.compose([Validators.required,Validators.minLength(10)])],
        //checkBox: ['', Validators.compose([checkbox checked validation])]
      });
  }

  SignUp() {
    if (this.SignUpForm.valid) {
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }

}
