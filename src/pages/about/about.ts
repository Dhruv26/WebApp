import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

declare const google;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    navigator.geolocation.getCurrentPosition(
 
      (position) => {

          let options = {
            center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
          this.map = new google.maps.Map(this.mapElement.nativeElement, options);
      },
      (error) => {
        console.log(error);
      }
    );    
    /*
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 8,
        center: posMaceio,
        mapTypeId: 'roadmap'
    });
    this.map.setCenter(posMaceio);*/

  }



  createReport() {

  }

}
