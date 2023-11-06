import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {

  subscribe: Subscription

  pedidos: any[] = []


  constructor(private apiService: ApiServiceService) {
    this.subscribe = this.apiService.getArr('registers')?.subscribe(data => {
      this.pedidos = data
      console.log(data);

    })
  }

}
