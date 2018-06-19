import { HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
//import 'rxjs/add/operator/map';

import { AngularFireAuth } from 'angularfire2/auth';
import {Facebook , FacebookLoginResponse} from '@ionic-native/facebook';

import {  HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response, URLSearchParams,HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';
import { Observable } from "rxjs/Rx";
import { AlertController } from 'ionic-angular';
import { App } from 'ionic-angular';

import { map, catchError } from 'rxjs/operators';
//import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';

@Injectable()
export class ServiceProvider {
  user: firebase.User;
  authState: Observable<firebase.User>;
  userData: any;
  displayName;
  num: any;
  cities:  any[];

  private BaseAPI = `http://www.onlinebilty.com/webservices`;
  

  constructor(public http: Http,public afAuth: AngularFireAuth,
    private facebook: Facebook,public alert :AlertController,
     public afd: AngularFireDatabase,public datepipe:DatePipe,
      public app: App) {
      this.authState = afAuth.authState;

    this.authState.subscribe(user => {
      this.user = user;
    });
  }

   addCust(Phonenum, type) {
    let api = `http://www.onlinebilty.com/webservices/registration_new?type=${type}&phonenumber=${Phonenum.user_phonenum}&password=`;
    //console.log(OTPapi);
    
    return Observable.from(new Promise((resolve, reject) => {
           let headerOptions: any = { 'Content-Type': 'application/json' };
           let headers = new Headers(headerOptions)
          const options = new RequestOptions({headers: headers});
    
        // this.http.get(OTPapi).timeout(15000)
        // .subscribe((result:Response) => {
        //  let otp = result.json();
        //  console.log(otp);
        // })

        this.http.get(api)
          .timeout(15000)
          .subscribe(res => {
            let data = res.json();
            if(data.status == "Failed") {
              //console.log('already register');
              let alert = this.alert.create({
                title: 'Registered',
                message: `User Aleady Register`,
                buttons: ['OK']
              });
              alert.present();
            }
            console.log('register:',data);
            //console.log(data.status);
            resolve(res);
          }, (err) => {
            reject(err);
          });
        }))
      }

      private extraData(res:Response){
        let body = res
        return body || {};
      }

      private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
          const err = error || '';
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
      }

    search(data,userID) {
      console.log(data);
       let Date = this.datepipe.transform(data.date, 'dd-MM-yyyy');
       //console.log(Date);
      let API = this.BaseAPI + `/search_data?user_id=${userID}&fromcity=${data.from_location.city_name}&tocity=${data.to_location.city_name}&book_date=${Date}&material_type=${data.material}`;
      this.http.get(API).map(res => res.json()).subscribe(data => {
        console.log(data);
      })
    }
 

  loginWithFB() {

    if(this.afAuth) {
     return  this.afAuth.auth
    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res => console.log(res));
    }

    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      });
    });
  }

}
