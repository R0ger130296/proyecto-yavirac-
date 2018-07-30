import { Component, ViewChild, OnInit} from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
@IonicPage()
@Component({
  selector: 'page-secante',
  templateUrl: 'secante.html',
})
export class SecantePage implements OnInit {
 
  @ViewChild('lineCanvasacos') lineCanvasacos;
 
  lineChartacos: any;
  etiquetasacos = [];
  valoresacos= [];
  funcionacos = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SecantePage');
  }
  ngOnInit() {
    this.derivadaacos();
    this.graficaracos();
  }
  calcularacos() {
    this.funcionacos = 'sec(x)';
    let fx= 0;
    for(let i = 0; i<=360 ; i++){
      this.etiquetasacos.push(i.toString());
      fx= Math.acos(i*Math.PI/180);
      this.valoresacos.push(fx);
    }
  }
  derivadaacos() {
    this.funcionacos = 'd(sec(x))/dx';
    const h = 0.0000001;
    let fx = 0;
    for(let i = 0; i<=360 ; i++){
      this.etiquetasacos.push(i.toString());
      fx = Math.acos(i*Math.PI/180);
      let fxMASh = Math.acos(i*Math.PI/180 + h);
      let derivadaacos = (fxMASh - fx)/h;
      this.valoresacos.push(derivadaacos);
    }
  }
  graficaracos() {
    this.lineChartacos = new Chart(this.lineCanvasacos.nativeElement, {
      type: 'line',
      data: {
        labels: this.etiquetasacos,
        datasets: [
          {
            label: this.funcionacos,
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
            data: this.valoresacos,
            spanGaps: false,
          }
        ]
      }
    });
  }
}