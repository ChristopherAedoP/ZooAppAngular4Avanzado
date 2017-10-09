import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { HomeComponent } from './components/home/home.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { Routes, RouterModule } from '@angular/router';

const  APPROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'animales', component: AnimalsComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'cuidadores', component: KeepersComponent },
  { path: 'tienda', component: TiendaComponent},
  { path: 'registro', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'editar-usuario', component: UserEditComponent },
  { path: 'animal/:id', component: AnimalDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


export const APP_ROUTES = RouterModule.forRoot(APPROUTES);
