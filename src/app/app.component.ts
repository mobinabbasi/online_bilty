import { Component,ViewChild } from '@angular/core';
//import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';


import { NetworkProvider } from '../providers/network/network';
import { Platform,  Events ,AlertController,Nav} from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { initializeApp } from 'firebase/app';
import { DatePipe } from '@angular/common';

//import { HomePage } from  '../pages/home/home';

// import { SearchPage } from  '../pages/search/search';

// import { MybookingsPage } from  '../pages/mybookings/mybookings';

// import { ProfilePage } from  '../pages/profile/profile';

// import { NotificationPage } from  '../pages/notification/notification';

//import { NotificationemptyPage } from  '../pages/n';

//import { MybookingemptyPage } from  '../pages/mybookingempty/mybookingempty';



@Component({
  templateUrl: 'app.html',
  providers: [DatePipe]
})
export class MyApp {
  rootPage = HomePage;
  // Online;
  // Offline

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public events: Events,public alert :AlertController ,
    public network: Network,
    public networkProvider: NetworkProvider) {
    // platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   statusBar.styleDefault();
    //   splashScreen.hide();
    // });

    // initializeApp() {
        platform.ready().then(() => {
        statusBar.styleDefault();
  splashScreen.hide();
  
  this.networkProvider.initializeNetworkEvents();
  
  // Offline event
  this.events.subscribe('network:offline', () => {
  let alert = this.alert.create({
    title: 'Network Connction',
    message: 'Please Check Your Network Connection!',
    //buttons:['OK']
    buttons: [{
      text: "OK",
      handler: () => { platform.exitApp(); }
    }]
  })
  alert.present();
  });
  
  
  // Online event
  this.events.subscribe('network:online', () => {
  // alert('network:online ==> '+this.network.type);        
  });
  
  });
  
  }

  // }
  
  
  }



