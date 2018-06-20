import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-searchresult',
  templateUrl: 'searchresult.html',
})
export class SearchresultPage {
public trns_list = [];
public from:any;
public to:any;
public count_list:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.trns_list = this.navParams.get('trns_list');
    this.from = this.navParams.get('from');
    this.to = this.navParams.get('to');
    console.log(this.trns_list);

    // for(var i=1; i <= this.trns_list.length;i++){
    //   this.count_list = i;
    //   return this.count_list;
    //   console.log(this.count_list);
    //}
  }

  updateCucumber(v:any) {
    console.log(v.value);
  }

  filter() {
    this.navCtrl.push('FilterPage',{
      from: this.from
    })
  }

}
