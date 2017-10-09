import { AdminGuard } from './../services/admin.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar componentes
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';


const ADMIN_ROUTES: Routes = [
  {
    path: 'admin-panel',
    component: MainComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'listado' },
      { path: 'listado', component: ListComponent },
      { path: 'crear', component: AddComponent },
      { path: 'editar/:id', component: EditComponent }
    ]
 }
];


@NgModule({
  imports: [
    RouterModule.forChild(ADMIN_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule {}
