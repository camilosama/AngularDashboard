import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  tituloI = ['WEB','APP','TvSmart'];
  titleI: string = "METODO";
  tituloS = ['ANIME','VIDEOS','CARTAS'];
  titleS: string = "DETALLE";
  

  valorI = ['200','150','430'];
  valorS = ['480','101','210'];
}
