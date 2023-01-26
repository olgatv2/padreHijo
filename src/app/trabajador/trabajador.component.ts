import { Component, Input} from '@angular/core';
import { CardTrabajadorComponent } from '../card-trabajador/card-trabajador.component';
import { Trabajador } from '../modelos/trabajador';


@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent {

// metodo para borrar el trabajador pasado por id del array de trabajadores
borrar(id:number){
  let trabajadorBorrado = this.trabajadores.indexOf(this.trabajadores[id]);
  let confirma = confirm(`¿Estás seguro que quieres borrar a {{trabajadorBorrado.nombre}}?`);
  if (confirma ==true) {this.trabajadores.splice(id,1)};
}

// metodo para sumar un voto al trabajador pasado por id
sumaVoto(id:number){
  let trabajadorVotado = this.trabajadores[id];
  trabajadorVotado.votos++;
}

// metodo para restar un voto al trabajador pasado por id
restaVoto(id:number){
  let trabajadorVotado = this.trabajadores[id];
  if (trabajadorVotado.votos != 0){
    trabajadorVotado.votos--;
  }
}
}
