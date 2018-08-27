import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateReportPage } from '../create-report/create-report';

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
    this.showMap()
    this.addMarker()
  }

  showMap() {
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
  }
  
  addMarker() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: latLng
        });
      },
      (error) => {
        console.log(error);
      }
    );
    /*
    google.maps.event.addListener(marker, 'click', () => {
      this.events.publish('user:roomPage', roomID, sport, time, lat, long);
    });
    */
  }

  createReport() {
    this.navCtrl.push(CreateReportPage);
  }

}
