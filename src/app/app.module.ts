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


// import {ConfirmPage} from '../pages/confirm/confirm';
// import {DetailsPage} from '../pages/details/details';
// import {FilterPage} from '../pages/filter/filter';
// //import {LoginPage} from '../pages/login/login';
// import {MybookingsPage} from '../pages/mybookings/mybookings';
// import {MytruckPage} from '../pages/mytruck/mytruck';
// import {NotificationPage} from '../pages/notification/notification';
// import {PasswordPage} from '../pages/password/password';
// import {ProfilePage} from '../pages/profile/profile';
// import {ProfilepasswordPage} from '../pages/profilepassword/profilepassword';
// //import {RegisteredPage} from '../pages/registered/registered';
// import {ResetPage} from '../pages/reset/reset';
// import {ResetpasswordPage} from '../pages/resetpassword/resetpassword';
// import {SearchPage} from '../pages/search/search';
// import {SearchLocationPage} from '../pages/search-location/search-location';
// import {TrucktypePage} from '../pages/trucktype/trucktype';
// import {VerifyPage} from '../pages/verify/verify';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisteredPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    HttpClientModule,
    HttpModule,
    
    
    
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
    
  ]
})
export class AppModule {}
