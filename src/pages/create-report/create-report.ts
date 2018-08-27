import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-create-report',
  templateUrl: 'create-report.html',
})
export class CreateReportPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  sport: string;
  lat: any;
  lng: any;
  description: string;
  marker: google.maps.Marker;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateReportPage');
    this.showMap();
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

        google.maps.event.addListener(this.map, 'click', (location) => {
          this.lat = location.latLng.lat();
          this.lng = location.latLng.lng();
          let latLng = new google.maps.LatLng(this.lat, this.lng);
          this.addMarker(latLng, this.mapElement.nativeElement, options);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addMarker(location, nativeElement, mapOptions){
    console.log(location.lat() + ',' + location.lng())
    if(this.marker != null)
      this.marker.setMap(null);
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: location
    });
  }
}
