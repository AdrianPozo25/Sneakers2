import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ContactaComponent } from './pages/contacta/contacta.component';
import { CestaComponent } from './pages/cesta/cesta.component';
import { DetallesProductoComponent } from './pages/detalles-producto/detalles-producto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'contacta', component: ContactaComponent },
  { path: 'cesta', component: CestaComponent },
  { path: 'detalles/:id', component: DetallesProductoComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
