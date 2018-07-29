import { Component, ViewChild, OnInit} from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
@IonicPage()
@Component({
  selector: 'page-seno',
  templateUrl: 'seno.html',
})
export class SenoPage implements OnInit {
 
  @ViewChild('lineCanvassin') lineCanvassin;
 
  lineChartsin: any;
  etiquetassin = [];
  valoressin = [];
  funcionsin = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SenoPage');
  }
  ngOnInit() {
    this.derivadasin();
    this.graficarsin();
  }
  calcularsin() {
    this.funcionsin = 'Sin(x)';
    let fx= 0;
    for(let i = 0; i<=360 ; i++){
      this.etiquetassin.push(i.toString());
      fx= Math.sin(i*Math.PI/180);
      this.valoressin.push(fx);
    }
  }
  derivadasin() {
    this.funcionsin = 'd(Sin(x))/dx';
    const h = 0.0000001;
    let fx = 0;
    for(let i = 0; i<=360 ; i++){
      this.etiquetassin.push(i.toString());
      fx = Math.sin(i*Math.PI/180);
      let fxMASh = Math.sin(i*Math.PI/180 + h);
      let Derivadasin = (fxMASh - fx)/h;
      this.valoressin.push(Derivadasin);
    }
  }
  graficarsin() {
    this.lineChartsin = new Chart(this.lineCanvassin.nativeElement, {
      type: 'line',
      data: {
        labels: this.etiquetassin,
        datasets: [
          {
            label: this.funcionsin,
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,0.5)",
            borderColor: "rgba(0,0,255,0.5)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255,0,0,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(0,255,0,1)",
            pointHoverBorderColor: "rgba(255,0,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            data: this.valoressin,
            spanGaps: false,
          }
        ]
      }
    });
  }
}