import { ComponentsModule } from './components/components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { VisitasComponent } from './components/visitas/visitas.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { AddProdutoComponent } from './components/add-produto/add-produto.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PedidosComponent,
    VisitasComponent,
    ProdutosComponent,
    AddProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
