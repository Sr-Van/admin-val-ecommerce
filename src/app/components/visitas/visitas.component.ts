import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.css']
})
export class VisitasComponent {

  subscribe: Subscription

  visitas: any[] = []


  constructor(private apiService: ApiServiceService) {
    this.subscribe = this.apiService.getArr('visits')?.subscribe(data => {
      this.visitas = data
    })
  }

}
