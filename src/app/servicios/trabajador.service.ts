import { Injectable } from '@angular/core';
import { Trabajador } from '../modelos/trabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  constructor() { }

  private titulo:string = 'Listado trabajadores';
  private trabajadores:Array<Trabajador> = [
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

  public getTitulo() {
    return this.titulo;
  }

  public getTrabajadores() {
    return this.trabajadores;
  }

  public getById(id:number) {
    return this.trabajadores[id];
  }
  public sumaVoto(id:number) {
    let trabajadorVotado = this.trabajadores.find(a => a.id === id);
    trabajadorVotado!.votos++;
   }

   public restaVoto(id:number) {
     let trabajadorVotado = this.trabajadores.find(a => a.id === id);
     if (trabajadorVotado!.votos > 0){
       trabajadorVotado!.votos--;
     }
   }

   public borrar(id:number): void {
     let trabajador = this.trabajadores.findIndex(a=>a.id == id);
     this.trabajadores.splice(trabajador,1);
   }
}
