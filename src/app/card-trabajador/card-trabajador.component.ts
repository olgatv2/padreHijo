import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter} from '@angular/core';
import { Trabajador} from '../modelos/trabajador';



@Component({
  selector: 'app-card-trabajador',
  templateUrl: './card-trabajador.component.html',
  styleUrls: ['./card-trabajador.component.css']
})
export class CardTrabajadorComponent implements OnInit{

  // decorador input para el trabajador que se le pasa desde el padre
  @Input() trabajador!: Trabajador;

  // decxorador output para el evento likeTrabajador
  @Output() eventoLike = new EventEmitter<number>();
  // decxorador output para el evento unlikeTrabajador
  @Output() eventoUnlike = new EventEmitter<number>();
  // decxrador output para el evento borraTrabajador
  @Output() borraTrabajador = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  //metodo que recibe un trabajador y emite el evento likeTrabajador con el id del trabajador
  like(id:number){
    this.eventoLike.emit(id);
  }

  //metodo que recibe un trabajador y emite el evento unlikeTrabajador con el id del trabajador
  unlike(id:number){
    this.eventoUnlike.emit(id);
  }

  //metodo que recibe un trabajador y emite el evento borraTrabajador con el id del trabajador
  eliminar(id:number){
    let opcion = confirm(`¿Está seguro que quiere borrar a {{trabajador.nombre}}?`);
    if (opcion == true) { this.borraTrabajador.emit(id)};

  }
}
