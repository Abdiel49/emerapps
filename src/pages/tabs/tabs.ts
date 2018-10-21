import { AlistarMochilaPage } from '../alistar-mochila/alistar-mochila';
import { MiCuentaPage } from '../mi-cuenta/mi-cuenta';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
//import { MiMochilaPage } from '../mi-mochila/mi-mochila';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  miCuentaRoot = 'MiCuentaPage';
  miMochilaRoot = 'MiMochilaPage';
  alistarMochilaRoot = 'AlistarMochilaPage';


  constructor(public navCtrl: NavController) {}

}
