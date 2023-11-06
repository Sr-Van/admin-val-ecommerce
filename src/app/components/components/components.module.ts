import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { AddProdutoComponent } from '../add-produto/add-produto.component';
import { PedidosComponent } from '../pedidos/pedidos.component';
import { VisitasComponent } from '../visitas/visitas.component';
import { ProdutosComponent } from '../produtos/produtos.component';




@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    AddProdutoComponent,
    PedidosComponent,
    VisitasComponent,
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    AddProdutoComponent,
    PedidosComponent,
    VisitasComponent,
    ProdutosComponent
  ]
})
export class ComponentsModule { }
