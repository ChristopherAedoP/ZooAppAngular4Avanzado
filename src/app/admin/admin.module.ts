import { UserService } from './../services/user.service';
import { AdminGuard } from '../services/admin.guard';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// importar componentes
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';

// rutas
import { AdminRoutingModule } from './admin.routing';

import { SearchPipe } from './pipes/search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ListComponent,
    MainComponent,
    SearchPipe
],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    AddComponent,
    EditComponent,
    ListComponent,
    MainComponent
  ],
  providers: [
    AdminGuard,
    UserService
  ]

})
export class AdminModule {}
