import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css']
})
export class ProgressComponent  {
   progreso1: number = 25;
   progreso2: number = 57;
   btn1: String = 'btn btn-primary';
   btn2: String = 'btn btn-info';

   get getProgresoU(){
     return `${this.progreso1}%`;
   }
   get getProgresoD(){
    return `${this.progreso2}%`;
  }
  cambioValorHijo( valor: number ){
    console.log(valor);
  }
}
