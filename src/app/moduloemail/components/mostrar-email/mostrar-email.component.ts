import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-mostrar-email',
  template: `

              <div *ngIf="emailContacto">
                    <h4> {{ title }}</h4>
                  <span>
                <strong>Email de contacto </strong> {{ emailContacto }}
              </span>
                  <button (click)="borrarEmail()">eliminar correo contacto</button>
            </div>
  `
})
export class MostrarEmailComponent implements OnInit, DoCheck {


  title = 'Mostrar Email';
  emailContacto: string;

  constructor() { }

  ngOnInit() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }
  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }
  borrarEmail() {
    localStorage.removeItem('emailContacto');
    this.emailContacto = null;
  }
}
