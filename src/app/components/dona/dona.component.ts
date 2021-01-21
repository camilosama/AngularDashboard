import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

   // Doughnut
     @Input('title') title = 'Detalle Grafica';
     @Input('titulo') doughnutChartLabels: Label[] = ['Descargas', 'En tienda', 'Emails'];
     @Input('valor') doughnutChartData: MultiDataSet = [ [350, 450, 100] ];
   public colors: Colors[] =[ {backgroundColor:['#6857E6','#009FEE','#F0259']} ]
}
