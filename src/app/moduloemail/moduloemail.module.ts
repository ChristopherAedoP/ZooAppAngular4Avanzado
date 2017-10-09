
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// importar componentes

import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';
import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
import { MainEmailComponent } from './components/main-email/main-email.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MostrarEmailComponent,
    GuardarEmailComponent,
    MainEmailComponent
  ],
  exports: [
    MainEmailComponent
  ]
})
export class ModuloEmailModule {}
