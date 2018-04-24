import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';


@Injectable()
export class ServiceProvider {
  user: firebase.User;
  authState: Observable<firebase.User>;

  constructor(public http: HttpClient,public afAuth: AngularFireAuth,
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

}
