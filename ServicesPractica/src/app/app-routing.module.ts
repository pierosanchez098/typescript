import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponentComponent } from './error-component/error-component.component';
import {ListaUsuariosComponent} from "./lista-usuarios/lista-usuarios.component";
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';

const routes: Routes = [
  {path: 'lista-usuarios', component: ListaUsuariosComponent}
  {path: 'login', component: LoginComponentComponent}
  {path: 'registro', component: RegisterComponentComponent}
  {path: 'error', component: ErrorComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
