import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { ServiceApiProvider } from '../../providers/service-api/service-api';

@IonicPage()
@Component({
  selector: 'page-mi-cuenta',
  templateUrl: 'mi-cuenta.html',
})
export class MiCuentaPage {
  slides = [
    {
      title: "Tsunami",
      description: "Es una serie de grandes olas de longitud de onda extremadamente larga",
      image: "http://www.elfinanciero.com.mx/uploads/2018/09/29/33686c2d891538234787_standard_desktop_medium_retina.jpeg",
    },{
      title: "Incendio",
      description: "Un incendio es una ocurrencia de fuego no controlada que puede afectar o abrasar algo que no está destinado a quemarse. Puede afectar a estructuras y a seres vivos.",
      image: "http://elinformantebcs.mx/wp-content/uploads/2015/12/elinformantebcs.mx_incendio-santa-rosalia.jpg",
    },{
      title: "Inundacion",
      description: "es la ocupación por parte del agua de zonas que habitualmente están libres de esta, ​ por desbordamiento de ríos, torrentes o ramblas, por lluvias torrenciales, deshielo, por subida de las mareas por encima del nivel habitual, por maremotos, huracanes, entre otros.",
      image: "https://static.iris.net.co/sostenibilidad/upload/images/2016/7/13/35606_1.jpg",
    },{
      title: "Terremoto",
      description: "Un terremoto es una sacudida intensa de la superficie de la Tierra. El temblor es causado por movimientos en la capa más externa de la Tierra.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIgy7wXs4uEHAb0IxIYiqQtIwi_s0g9WmCM0qn_u-bUy5wSPCvA",
    },{
      title: "Huracan",
      description: "Los huracanes son tormentas grandes, arremolinadas. ",
      image : "https://s1.eestatic.com/2018/09/14/mundo/america/eeuu/Huracanes-Temporales-EEUU_337979458_97118315_1024x576.jpg"
    }
  ]

  latitud;
  longitud;
  users: any[] = [];
  ubicacion: any;
  pedido;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private geolocation: Geolocation,
              private _serApi: ServiceApiProvider
              ) {
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
