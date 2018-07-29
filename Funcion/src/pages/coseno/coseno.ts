import { Component, ViewChild, OnInit} from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
@IonicPage()
@Component({
  selector: 'page-coseno',
  templateUrl: 'coseno.html',
})
export class SenoPage implements OnInit {
 
  @ViewChild('lineCanvascos') lineCanvascos;
 
  lineChartcos: any;
  etiquetascos = [];
  valorescos = [];
  funcioncos = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CosenoPage');
  }
  ngOnInit() {
    this.derivadacos();
    this.graficarcos();
  }
  calcularcos() {
    this.funcioncos = 'Cos(x)';
    let fx= 0;
    for(let i = 0; i<=360 ; i++){
      this.etiquetascos.push(i.toString());
      fx= Math.cos(i*Math.PI/180);
      this.valorescos.push(fx);
    }
  }
  derivadacos() {
    this.funcioncos = 'd(Cos(x))/dx';
    const h = 0.0000001;
    let fx = 0;
    for(let i = 0; i<=360 ; i++){
      this.etiquetascos.push(i.toString());
      fx = Math.cos(i*Math.PI/180);
      let fxMASh = Math.cos(i*Math.PI/180 + h);
      let Derivadacos = (fxMASh - fx)/h;
      this.valorescos.push(Derivadacos);
    }
  }
  graficarcos() {
    this.lineChartcos = new Chart(this.lineCanvascos.nativeElement, {
      type: 'line',
      data: {
        labels: this.etiquetascos,
        datasets: [
          {
            label: this.funcioncos,
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
            data: this.valorescos,
            spanGaps: false,
          }
        ]
      }
    });
  }
}