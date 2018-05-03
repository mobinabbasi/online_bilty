import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

import { AngularFireAuth } from 'angularfire2/auth';
import {Facebook , FacebookLoginResponse} from '@ionic-native/facebook';
//import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';

import {  HttpHeaders, HttpParams } from '@angular/common/http';
//import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';
import { Observable } from "rxjs/Rx";


@Injectable()
export class ServiceProvider {
  user: firebase.User;
  authState: Observable<firebase.User>;
  userData: any;
  displayName;
  num: any;
  apiUrl = `http://mobitplus.com/onlinebilty/webservices/registration_new?type=1&phonenumber1234567890=&password=`;

  constructor(public http: HttpClient,public afAuth: AngularFireAuth,
    private facebook: Facebook,
     public afd: AngularFireDatabase) {
      this.authState = afAuth.authState;

    this.authState.subscribe(user => {
      this.user = user;
    });
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addCust(Phonenum , type) {
    //console.log(type);
    let api = `http://mobitplus.com/onlinebilty/webservices/registration_new?type=${type}&&phonenumber=${Phonenum.user_phonenum}&password=`;
     console.log(api)
      this.num = Phonenum.user_phonenum;
      this.http.post(api,JSON.stringify(Phonenum))
      .subscribe(res => {
        console.log(res);
      },error => {
        console.log(error);
      })
  }

 

  // SignUpUser(name, email, password, confirmpass, number) {
  //   return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //   .then(newUser => {
  //     this.afd.list('/userProfile').update(newUser.uid, {email:email, name:name});
  //   });
  // }

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
