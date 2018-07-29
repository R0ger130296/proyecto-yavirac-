import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SenoPage } from '../seno/seno';
import { CosecantePage } from '../cosecante/cosecante';
import { SecantePage } from '../secante/secante';
import {CosenoPage} from '../coseno/coseno';

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
