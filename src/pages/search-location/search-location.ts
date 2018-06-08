import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { error } from '@firebase/database/dist/esm/src/core/util/util';


@IonicPage()
@Component({
  selector: 'page-search-location',
  templateUrl: 'search-location.html',
})
export class SearchLocationPage {
  searchQuery: string = '';
  cities = [];
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public httpclient: HttpClient) {
    this.GetCity();
  }

  
  


  GetCity() {
    let API = 'http://mobitplus.com/onlinebilty/webservices/cities';
    this.http.get(API).do(res => res.json()).map(data => data.json())
    .subscribe(result => {
      this.item = result;
      //this.userlist = Array.of(this.userlist);
      for (var i of this.item.userlist) {
        this.cities.push(i.city_name);
      }
      console.log(this.cities);
    });
  }

}
