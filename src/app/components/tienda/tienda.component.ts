import { fadeIn } from './../animation';

import { Component , OnInit } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  animations: [
    trigger('marcar' , [
      state('inactive', style ({
        border: '5px solid #ccc'
      })),
      state('active', style ({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '50px',
        transform: 'scale(1.2)'
      })),
      transition('inactive => active', animate('300ms linear')),
      transition('active => inactive', animate('300ms linear'))
    ]),
    fadeIn
  ]
})
export class TiendaComponent implements OnInit {
  public titulo;
  public nombreDelParque: string;
  public miParque;
  public state ;
  public botontext;

  constructor() {

    this.titulo = 'Esta es una tienda';
    this.state = 'inactive';
    this.botontext = 'boton inactivo';
  }
  cambiarEstado(status) {
    if (status === 'inactive') {
      this.state = 'active';
      this.botontext = 'boton activo';
    }else {
      this.state = 'inactive';
      this.botontext = 'boton inactivo';
    }
  }

  mostrarNombre() {
    console.log(this.nombreDelParque);

  }
  verDatosParque(event) {
    // console.log(event);
    this.miParque = event;
  }

    ngOnInit() {
      $('#textoJq').hide();
       $('#botonJq').click(function( ){
        $('#textoJq').slideToggle();
       });

       $('#cajaJq').dotdotdot();
    }

    textoRichEditor(event) {
      console.log('editor : ', event);
    }
}
