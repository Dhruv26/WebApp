import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignUpPage} from '../pages/sign-up/sign-up';
import { ReportsPage } from "../pages/reports/reports";
import { CreateReportPage } from '../pages/create-report/create-report'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from '../pages/settings/settings';

import { HTTP } from '@ionic-native/http';
import xmlrpc from 'xmlrpc';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    LoginPage,
    SignUpPage,
    SettingsPage,
    ReportsPage,
    CreateReportPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    LoginPage,
    SignUpPage,
    SettingsPage,
    ReportsPage,
    CreateReportPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
