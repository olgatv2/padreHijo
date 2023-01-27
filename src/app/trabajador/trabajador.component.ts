import { Component } from '@angular/core';
import { Trabajador } from '../modelos/trabajador';
import { TrabajadorService } from '../servicios/trabajador.service';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})

export class TrabajadorComponent{

  trabajadores:Trabajador[]=[];
  titulo = "Listado de trabajadores";

  constructor(private servicioTrabajadores:TrabajadorService) {}

  ngOnInit() {
    this.trabajadores = this.servicioTrabajadores.getTrabajadores();
  }

  sumaVoto(id:number) {
    this.servicioTrabajadores.sumaVoto(id);
  }

  restaVoto(id:number) {
    this.servicioTrabajadores.restaVoto(id);
  }

  borrar(id:number) {
    this.servicioTrabajadores.borrar(id);
  }
}
