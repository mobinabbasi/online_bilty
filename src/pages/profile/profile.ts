import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams, MenuController,PopoverController } from 'ionic-angular';
import { IonicPage, NavController, NavParams, MenuController, PopoverController } from 'ionic-angular';
//import { ProfilepopoverPage } from '../profilepopover/profilepopover';

//import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Http , Response} from '@angular/http';
import { ProfilepopoverPage } from '../profilepopover/profilepopover';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  [x: string]: any;

  //constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public popoverCtrl: PopoverController) {
  private Profile: FormGroup;
  public Id:any;
  public number:any;
  public info:any;
  popovervalue: any;


  constructor(public navCtrl: NavController,
   public navParams: NavParams, public formBulider: FormBuilder,
     public menuCtrl: MenuController , public http: Http, public popoverCtrl: PopoverController) {
       this.Profile = formBulider.group({
        person:['', Validators.compose([Validators.required,Validators.minLength(3)])],
        call_num:['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
        email: ['',Validators.compose([Validators.required,Validators.email])],
        city: ['', Validators.compose([Validators.required])],
        state: ['', Validators.compose([Validators.required])],
        address: ['',Validators.compose([Validators.required])]
       })

       this.Id = navParams.get('id');
       this.number = navParams.get('number');
       this.info = navParams.get('info');
       console.log(this.info.user_id);
  }
  profile_info() {
    let API = `http://mobitplus.com/onlinebilty/webservices/profileupdate?type=2&phonenumber=${this.Profile.value.call_num}&username=${this.Profile.value.person}&email_id=${this.Profile.value.email}&city=${this.Profile.value.city}&state=${this.Profile.value.state}&address=${this.Profile.value.address}&profile_pic=${'null'}&user_id=${this.info.user_id}`;
    console.log(API);
    this.http.get(API).subscribe((data:Response) => {
      let Data = data.json();
      console.log(data);
    })
    //console.log(this.Profile.value);
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('ProfilepopoverPage');
    popover.onDidDismiss( val => this.popovervalue = val);
    popover.present({
      ev: myEvent
    });
  }

  password() {
    this.navCtrl.push('ResetpasswordPage',{
      info: this.info
    })
  }
  

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
