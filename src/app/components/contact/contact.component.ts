import { Component } from '@angular/core';
import { fadeIn } from '../animation';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [],
  animations: [fadeIn]
})
export class ContactComponent {
  title= 'Contacto';
  emailContacto: string;

  constructor() { }

}
