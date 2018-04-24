import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

import { AngularFireAuth } from 'angularfire2/auth';
import {Facebook , FacebookLoginResponse} from '@ionic-native/facebook';


@Injectable()
export class ServiceProvider {
  user: firebase.User;
  authState: Observable<firebase.User>;
  userData: any;
  displayName;

  constructor(public http: HttpClient,public afAuth: AngularFireAuth, private facebook: Facebook,
     public afd: AngularFireDatabase) {
      this.authState = afAuth.authState;

    this.authState.subscribe(user => {
      this.user = user;
    });
  }

  SignUpUser(name, email, password, confirmpass, number) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(newUser => {
      this.afd.list('/userProfile').update(newUser.uid, {email:email, name:name});
    });
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
