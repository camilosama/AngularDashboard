import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /*

    const promesa = new Promise( (resolve, reject) => {

      if( false ){
        resolve('hola mundo');
      }else{
        reject('No hay mensaker');
      }
      
    });

    promesa.then( (mensaje) => {
      console.log(mensaje +'termino');
    })
    .catch( error => console.log(error));

    console.log('saludos despues de Promesa');
    */

    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    })
  }

  getUsuarios(){
    return  new Promise( resolve => {
      fetch(`https://reqres.in/api/users`)
        .then( resp => resp.json()
        .then(body => resolve(body.data)) );
    });

  }

}
