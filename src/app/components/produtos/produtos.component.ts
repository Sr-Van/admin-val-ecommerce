import { Subscription } from 'rxjs';
import { Component } from '@angular/core';

import { ApiServiceService } from 'src/app/services/api-service.service';
import { Products } from 'src/app/types/products.interface';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  itemLists: Products[] = [];
  eletronicItems: Products[] = [];
  acessoriesItems: Products[] = [];
  varietyItems: Products[] = [];
  bagItems: Products[] = [];

  subscribe: Subscription

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private apiService: ApiServiceService){
    this.subscribe = this.apiService.getArr('Products')?.subscribe(data => {
      this.itemLists = data

      this.eletronicItems = data?.filter(prod => prod.type === 'eletronics')
      this.acessoriesItems = data?.filter(prod => prod.type === 'acessories')
      this.varietyItems = data?.filter(prod => prod.type === 'variety')
      this.bagItems = data?.filter(prod => prod.type === 'bags')
    })

  }

  ngOnInit() {

  }



}
