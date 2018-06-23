import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-search-empty',
  templateUrl: 'search-empty.html',
})
export class SearchEmptyPage {
  public from:any;
  public to:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.from = this.navParams.get('from');
    this.to = this.navParams.get('to');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SearchEmptyPage');
  }

}
