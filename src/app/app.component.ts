import { Component } from '@angular/core';
import { Trabajador } from './modelos/trabajador';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Trabajadores';


 //declarar la variable trabajadores array del tipo Trabajador
  trabajadores:Array<Trabajador>=[
    {
      id:1,
      nombre: 'Ana',
      cargo: 'Programadora' ,
      foto:'1.jpg',
      votos:0
    },
    {
      id:2,
      nombre: 'Elena',
      cargo: 'Administrativa',
      foto:'2.jpg',
      votos:0
    },
    {
      id:3,
      nombre: 'Juan',
      cargo: 'Analista' ,
      foto:'3.jpg',
      votos:0
    },
    {
      id:4,
      nombre: 'Luis',
      cargo: 'Programador' ,
      foto:'4.jpg',
      votos:0
    },
    {
      id:5,
      nombre: 'Maria',
      cargo: 'Diseñadora' ,
      foto:'5.jpg',
      votos:0
    },
    {
      id:6,
      nombre: 'Pedro',
      cargo: 'Marketing' ,
      foto:'6.jpg',
      votos:0
    }
  ]

 // metodo para borrar el trabajador pasado por id del array de trabajadores
  borrar(id:number){}

  // metodo para sumar un voto al trabajador pasado por id
  sumaVoto(id:number){}

  // metodo para restar un voto al trabajador pasado por id
  restaVoto(id:number){}

}
