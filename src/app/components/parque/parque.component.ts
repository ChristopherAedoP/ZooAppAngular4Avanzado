
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges, OnInit, DoCheck , OnDestroy } from '@angular/core';



@Component({
  selector: 'app-parque',
  templateUrl: './parque.component.html',
  styleUrls: ['./parque.component.css'],
})
export class ParqueComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  @Input() nombre: string;
  @Input('metrosCuadrados') metros: number;
  public vegeracitacion: string;
  public abierto: boolean;

  @Output() pasameLosDatos = new EventEmitter();

  constructor() {
    this.nombre = 'parque los reyes';
    this.metros = 450;
    this.vegeracitacion = 'alta';
    this.abierto = true;
  }
  emitirEvento() {
    this.pasameLosDatos.emit(
      {
      'nombre': this.nombre ,
      'metro': this.metros,
      'vegetacion': this.vegeracitacion,
      'abierto': this.abierto
    }
    );
  }
  ngOnChanges( changes: SimpleChanges )   {
    console.log( 'cambios en los  componentes' );
    console.log( changes );

  }
  ngOnInit() {
    console.log('se carga on init');

  }

  ngDoCheck() {
    console.log('se ejecuta el DoCheck ');

  }
  ngOnDestroy() {
    console.log('se elimina componente');

  }

}
