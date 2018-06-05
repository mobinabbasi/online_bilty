import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, PopoverController } from 'ionic-angular';
import { ProfilepopoverPage } from '../profilepopover/profilepopover';
=======
//import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  [x: string]: any;
private Profile: FormGroup;

  //constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public popoverCtrl: PopoverController) {
  
//}

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public formBulider: FormBuilder,
     public menuCtrl: MenuController,public popoverCtrl: PopoverController) {
       this.Profile = formBulider.group({
        person:['', Validators.compose([Validators.required,Validators.minLength(3)])],
        call_num:['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
        email: ['',Validators.compose([Validators.required,Validators.email])],
        city: ['', Validators.compose([Validators.required])],
        state: ['', Validators.compose([Validators.required])],
        address: ['',Validators.compose([Validators.required])]
       })
  }
  profile_info() {
    console.log(this.Profile);
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('ProfilepopoverPage');
    popover.onDidDismiss( val => this.popovervalue = val);
    popover.present({
      ev: myEvent
    });
  }

}
