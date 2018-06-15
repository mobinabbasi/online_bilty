import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators';
import {Port} from '../../types/port';
import { Http } from '@angular/http';

@Injectable()
export class PortProvider {
  private cities = [];
  item: any;
  
  constructor(public http: Http) {
   // console.log('Hello PortProvider Provider');

   this.GetCity();
  }


  getCity(page?: number, size?: number): Port[] {
    let city = [];

    if (page && size) {
      city = this.cities.slice((page - 1) * size, ((page - 1) * size) + size);
    } else {
      city = this.cities;
    } 

    return city;
  }

  getPorts(page?: number, size?: number): Port[] {
    let ports = [];

    this.cities.forEach(country => {
      country.ports.forEach(port => {
        port.country = country;
        ports.push(port);
      });
    });

    if (page && size) {
      ports = ports.slice((page - 1) * size, ((page - 1) * size) + size);
    }

    return ports;
  }

  getPortsAsync(page?: number, size?: number, timeout = 2000): Observable<Port[]> {
    return new Observable<Port[]>(observer => {
      observer.next(this.getPorts(page, size));
      observer.complete();
    }).pipe(delay(timeout));
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
