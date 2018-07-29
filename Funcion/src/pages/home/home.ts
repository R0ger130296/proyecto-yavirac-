import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {chart} from 'chart.js';
import { SenoPage } from '../seno/seno';
import { CosenoPage } from '../coseno/coseno';
import { CosecantePage } from '../cosecante/cosecante';
import { SecantePage } from '../secante/secante';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
SENO():void{
this.navCtrl.push(SenoPage);
}
COSENO():void{
  this.navCtrl.push(CosenoPage);
}
COSECANTE():void{
  this.navCtrl.push(CosecantePage);
}
SECANTE():void{
  this.navCtrl.push(SecantePage);
}
}
