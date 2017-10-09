import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-email',
  template: `
   <div class="panel panel-default" >
      <h2>Modulo de email</h2>
      <hr>
      <app-mostrar-email></app-mostrar-email>
      <app-guardar-email></app-guardar-email>
   </div>

  `
})
export class MainEmailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
