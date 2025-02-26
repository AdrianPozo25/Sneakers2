import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactaComponent } from './contacta/contacta.component';
import { CestaComponent } from './cesta/cesta.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent, 
    HomeComponent,
    CatalogoComponent,
    ContactaComponent,
    CestaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent, 
    HomeComponent,
    CatalogoComponent,
    ContactaComponent,
    CestaComponent
  ]
})
export class PagesModule { }
