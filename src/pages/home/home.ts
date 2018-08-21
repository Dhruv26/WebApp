import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import xmlrpc from 'xmlrpc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private client = xmlrpc.createClient('http://dafaba89.ngrok.io/');

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log(this.client);
  }

  sendRequest() {
    console.log(this.client)
    /*
    this.client.methodCall('GetAllUsers', [], function (error, value) {
      if (error) {
        console.log('error:', error);
        console.log('req headers:', error.req && error.req._header);
        console.log('res code:', error.res && error.res.statusCode);
        console.log('res body:', error.body);
      } else {
        console.log('value:', value);
      }
    })
    */
  }
}
