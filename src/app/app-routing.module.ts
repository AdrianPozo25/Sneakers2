import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ContactaComponent } from './pages/contacta/contacta.component';
import { CestaComponent } from './pages/cesta/cesta.component';
import { DetallesProductoComponent } from './pages/detalles-producto/detalles-producto.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LanzamientosComponent } from './pages/lanzamientos/lanzamientos.component';
import { MiCuentaComponent } from './pages/mi-cuenta/mi-cuenta.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'contacta', component: ContactaComponent },
  { path: 'cesta', component: CestaComponent },
  { path: 'lanzamientos', component: LanzamientosComponent },
  {
    path: 'detalles/:id',
    component: DetallesProductoComponent,
    data: { renderMode: 'default' } // 👈 Evita prerender en esta ruta
  },
  { path: 'login', component: LoginComponent },
  { path: 'mi-cuenta', component: MiCuentaComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
