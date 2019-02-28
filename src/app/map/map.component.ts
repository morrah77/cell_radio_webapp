/// <reference types="@types/googlemaps" />

import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import {PointsService} from '../services/points.service';
import { Message } from '../types/message';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  text = 'The map text'
  GM_API_KEY = environment.GM_API_KEY;
  map: google.maps.Map;
  marker: google.maps.Marker;
  SNR: string;
  RSSI: string;

  constructor(private pointsService: PointsService) { }

  // TODO use @ViewChild
  ngOnInit() {
    if (typeof google === 'undefined') {

      const scriptHtmlNode = document.createElement('script');
      scriptHtmlNode.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.GM_API_KEY;
      scriptHtmlNode.type = 'text/javascript';
      scriptHtmlNode.async = true;
      scriptHtmlNode.defer = true;
      scriptHtmlNode.onload = this.initMap.bind(this);
      document.getElementsByTagName('body')[0].appendChild(scriptHtmlNode);
    } else {
      this.initMap();
    }
    this.pointsService.subscribe(this.displayMarkers.bind(this));
  }

  public initMap() {
    const mapSettings = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(document.getElementById('map'), mapSettings);
  }

  public displayMarkers(event: any) {
    this.unsetMarker();
    const msg: Message = JSON.parse(event.data);
    const geoPoint = new google.maps.LatLng(msg.GpsExt.Lat, msg.GpsExt.Lon);
    const point = msg.Points[msg.Points.length - 1];
    this.RSSI = point.RSSI;
    this.SNR = point.SNR;
    this.setMarker(geoPoint);
    this.map.setCenter(geoPoint);
  }

  public unsetMarker() {
    if (this.marker) {
      this.marker.setMap(null);
      this.marker = undefined;
    }
  }

  public setMarker(point: google.maps.LatLng) {
    this.marker = new google.maps.Marker({
      position: point,
      map: this.map,
      title: this.formMarkerTitle(point)
    });
  }

  private formMarkerTitle(point): string {
    return 'lat: ' + point.lat() + ', lng: ' + point.lng() + "\n" + 'SNR: ' + this.SNR + ', RSSI: ' + this.RSSI;
  }

}
