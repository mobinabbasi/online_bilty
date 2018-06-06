import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Http , Response} from '@angular/http';



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  private Profile: FormGroup;
  public Id:any;
  public number:any;
  public info:any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams, public formBulider: FormBuilder,
     public menuCtrl: MenuController , public http:Http) {
       this.Profile = formBulider.group({
        person:['', Validators.compose([Validators.required,Validators.minLength(3)])],
        call_num:['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
        email: ['',Validators.compose([Validators.required,Validators.email])],
        city: ['', Validators.compose([Validators.required])],
        state: ['', Validators.compose([Validators.required])],
        address: ['',Validators.compose([Validators.required])]
       }) 

      //  this.Id = navParams.get('id');
      //  this.number = navParams.get('number');
       this.info = navParams.get('info');
       console.log(this.info);
  }
  profile_info() {
    let API = `http://mobitplus.com/onlinebilty/webservices/profileupdate?type=2&phonenumber=${this.Profile.value.call_num}&username=${this.Profile.value.person}&email_id=${this.Profile.value.email}&city=${this.Profile.value.city}&state=${this.Profile.value.state}&address=${this.Profile.value.address}&profile_pic=${'null'}&user_id=${this.info.Id}`;
    console.log(API);
    this.http.get(API).subscribe((data:Response) => {
      let Data = data.json();
      console.log(data);
    })
    //console.log(this.Profile.value);
  }

  

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
