import { fadeIn } from '../animation';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [fadeIn]
})
export class HomeComponent implements OnInit {
  title= 'Bienvenido a NGZOO';
  constructor() { }

  ngOnInit() {
  }

}
