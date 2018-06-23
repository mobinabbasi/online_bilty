import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { error } from '@firebase/database/dist/esm/src/core/util/util';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-search-location',
  templateUrl: 'search-location.html',
})
export class SearchLocationPage {
  searchQuery: string = '';
  cities = [];
  item: any;
 private API = 'http://mobitplus.com/onlinebilty/webservices/cities';

descending: boolean = false;
order: number;
column: string = 'name';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public httpclient: HttpClient) {
    this.GetCity();
  }


  
 
 
  getItems(ev: any) {
    // Reset items back to all of the items
    this.GetCity();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.cities = this.cities.filter((city) => {
        return (city.toLowerCase().indexOf(val.toLowerCase()) > -1);
        
      })
    }
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
