import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProdutosComponent } from './pages/produtos/produtos.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarrouselHomeComponent } from './components/carrousel-home/carrousel-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavProdutosComponent } from './components/nav-produtos/nav-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
 
    ProdutosComponent,
    HomeComponent,
    ContatoComponent,
    NavbarComponent,
    CarrouselHomeComponent,
    FooterComponent,
    NavProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
