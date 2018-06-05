import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { error } from '@firebase/database/dist/esm/src/core/util/util';
import {ServiceProvider} from '../../providers/service/service';


@IonicPage()
@Component({
  selector: 'page-search-location',
  templateUrl: 'search-location.html',
  providers: [ServiceProvider],
})
export class SearchLocationPage {
  searchQuery: string = '';
  cities: string[];
  ErrorMessage: string;
 // city:any;
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private service: ServiceProvider,
    public http: Http, public httpclient: HttpClient) {
    //this.initializeItems();
    this.GetCity();
  }

  
  // initializeItems() {
  //   this.items = [
  //     'Amsterdam',
  //     'Bogota',
  //   ];
  // }


   GetCity() {
    //let city = new Array();
    this.service.getCity().subscribe(
      // cities => this.cities = cities,
      // error => this.ErrorMessage = <any>error
      (data) => {

        for(let key of data) {
          this.cities.push(data[key]);
        }
        console.log(this.cities);
      },(error) => console.log('Error', error));
    
    // let val = [];
    // for(var i of this.cities.data) {
    //   val.push(i.city_name);
    //   console.log(val);
    // }

  }

  // getItems(ev: any) {
  //   // Reset items back to all of the items
  //  // this.GetCity();

  //   // set val to the value of the searchbar
  //   let val = ev.target.value;

  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.items = this.items.filter((item) => {
  //       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }

}
