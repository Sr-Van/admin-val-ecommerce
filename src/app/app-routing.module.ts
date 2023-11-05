import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { VisitasComponent } from './components/visitas/visitas.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { AddProdutoComponent } from './components/add-produto/add-produto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'visitas', component: VisitasComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'add', component: AddProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
