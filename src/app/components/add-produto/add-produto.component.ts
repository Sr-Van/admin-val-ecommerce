import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent {

  constructor(private apiService: ApiServiceService){}

  myForm: any = {

  }

  onSubmit(form: any) {
    this.apiService.postItem('add-product', form.value)
  }

}
