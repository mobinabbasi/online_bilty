import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  private truck: FormGroup;
  public userlist = [];
  public user:any;
  public items = [];
  public weightrange:any;

  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBulider:FormBuilder,public http:Http) {
    this.truck = formBulider.group({
      truck_type:['', Validators.compose([Validators.required])],
      price:['',Validators.compose([Validators.required])],
      weigth: ['',Validators.compose([Validators.required])]
    })

    this.price();
    this.weight();
  }

  filter(){
   
    console.log(this.truck.value);
  }

 price(){
  let API="http://mobitplus.com/onlinebilty/webservices/truck_raterange";

  this.http.get(API).do(res => res.json()).map(data => data.json())
  .subscribe(result => {
    this.user = result;
    //this.userlist = Array.of(this.userlist);
    for (var i of this.user.userlist) {
      this.userlist.push(i.truck_raterange);
    }
    console.log(this.userlist);
  })
 }

 weight(){
  let API="http://mobitplus.com/onlinebilty/webservices/truck_weightrange";

  this.http.get(API).do(res => res.json()).map(data => data.json())
  .subscribe(result => {
    this.weightrange = result;
    //this.userlist = Array.of(this.userlist);
    for (var i of this.weightrange.userlist) {
      this.items.push(i.truck_capacityrange);
    }
    console.log(this.items);
  })
 }

 reset() {
  this.navCtrl.setRoot(this.navCtrl.getActive().component);
 }
}
