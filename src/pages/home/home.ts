import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  @ViewChild('lineCanvassin') lineCanvassin;
  @ViewChild('lineCanvascos') lineCanvascos;
  @ViewChild('lineCanvasin') lineCanvasasin;
  @ViewChild('lineCanvasacos') lineCanvasacos;
  lineChartsin: any;
  etiquetassin = [];
  valoressin = [];
  funcionsin = '';

 lineChartcos: any;
  etiquetascos = [];
  valorescos = [];
  funcioncos = '';

 
 
  lineChartasin: any;
  etiquetasasin = [];
  valoresasin = [];
  funcionasin = '';
  lineChartacos: any;
  etiquetasacos = [];
  valoresacos= [];
  funcionacos = '';
  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.derivadasin();
    this.graficarsin();
    this.derivadacos();
    this.graficarcos();
    this.derivadaasin();
    this.graficarasin();
    this.derivadaacos();
    this.graficaracos();
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
        let derivadacos = (fxMASh - fx)/h;
        this.valorescos.push(derivadacos);
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
      this.funcionacos = 'd(csc(x))/dx';
      const h = 0.0000001;
      let fx = 0;
      for(let i = 0; i<=360 ; i++){
        this.etiquetasacos.push(i.toString());
        fx = Math.asin(i*Math.PI/180);
        let fxMASh = Math.asin(i*Math.PI/180 + h);
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