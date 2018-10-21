import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Geolocation } from '@ionic-native/geolocation';

import { ServiceApiProvider } from '../../providers/service-api/service-api';

@IonicPage()
@Component({
  selector: 'page-mi-mochila',
  templateUrl: 'mi-mochila.html',
})
export class MiMochilaPage {
  latitud;
  longitud;
  users: any[] = [];
  ubicacion: any;
  pedido;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private geolocation: Geolocation,
              private _serApi: ServiceApiProvider) {
              this.pedido = this._serApi.items;
  }

  ionViewDidLoad() {
    this.getPosition();
  }
  getPosition():any{
    this.geolocation.getCurrentPosition()
      .then(result => {
      console.log(result);
      this.mostrarLatLong(result.coords.latitude, result.coords.longitude);
    })
    .catch(error =>{
    console.log(error);
  })
  }

  mostrarLatLong(lat, lng) {
    console.log(lat, lng)
    this.latitud = lat;
    this.longitud = lng;
    this._serApi.getApi(lat, lng)
    .subscribe(
      (data) => { // Success
        console.log(data['name'])
        //this.users = data['results'];
        this.ubicacion = data['name'];

      },
      (error) =>{
        console.error(error);
      }
    )
  }
  
}
