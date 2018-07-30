import { Component, ViewChild, OnInit} from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
@IonicPage()
@Component({
  selector: 'page-cosecante',
  templateUrl: 'cosecante.html',
})
export class CosecantePage implements OnInit {
 
  @ViewChild('lineCanvasasin') lineCanvasasin;
 
  lineChartasin: any;
  etiquetasasin = [];
  valoresasin = [];
  funcionasin = ''; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CosecantePage');
  }
  ngOnInit() {
    this.derivadaasin();
    this.graficarasin();
  }
  calcularasin() {
    this.funcionasin = 'Csc(x)';
    let fx= 0;
    for(let i = 0; i<=360 ; i++){
      this.etiquetasasin.push(i.toString());
      fx= Math.asin(i*Math.PI/180);
      this.valoresasin.push(fx);
    }
  }
  derivadaasin() {
    this.funcionasin = 'd(csc(x))/dx';
    const h = 0.0000001;
    let fx = 0;
    for(let i = 0; i<=360 ; i++){
      this.etiquetasasin.push(i.toString());
      fx = Math.asin(i*Math.PI/180);
      let fxMASh = Math.asin(i*Math.PI/180 + h);
      let derivadaasin = (fxMASh - fx)/h;
      this.valoresasin.push(derivadaasin);
    }
  }
  graficarasin() {
    this.lineChartasin = new Chart(this.lineCanvasasin.nativeElement, {
      type: 'line',
      data: {
        labels: this.etiquetasasin,
        datasets: [
          {
            label: this.funcionasin,
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,0.5)",
            borderColor: "rgba(0,255,0,0.5)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(255,0,0,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(0,255,0,1)",
            pointHoverBorderColor: "rgba(255,0,255,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            data: this.valoresasin,
            spanGaps: false,
          }
        ]
      }
    });
  }
}