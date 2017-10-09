import { Component } from '@angular/core';

@Component({
  selector: 'app-guardar-email',
  template: `

    <h4> {{title}} </h4>

    <input type="text" name="emailContacto" [(ngModel)]="emailContacto"/>

    <button (click)="guardarEmail()">Guardar Email </button>

  `
})
export class GuardarEmailComponent  {
  title = 'Guardar Email';
  emailContacto: string;

  constructor() { }


  guardarEmail() {
    localStorage.setItem('emailContacto', this.emailContacto);
    console.log('localStorage', localStorage.getItem('emailContacto'));

  }

}
