import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {FIREBASE_CONFIG} from './firebase.credential';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { ServiceProvider } from '../providers/service/service';
import {Facebook} from '@ionic-native/facebook';
import { RegisteredPage } from '../pages/registered/registered';
import {Network} from '@ionic-native/network';
import { NetworkProvider } from '../providers/network/network';
import {SearchPipe} from '../pipes/search/search';
import {SortPipe} from '../pipes/sort/sort';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { PortProvider } from '../providers/port/port';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisteredPage,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    HttpClientModule,
    HttpModule,SelectSearchableModule
    
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisteredPage,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    Facebook,
    Network,
    NetworkProvider,
    PortProvider,
    
    
  ]
})
export class AppModule {}
