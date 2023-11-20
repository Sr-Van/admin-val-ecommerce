import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Products } from '../types/products.interface';

import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  readonly url: string = 'https://my-api-six-beta.vercel.app/'

  prodArr: Products[] = []


  constructor(private http: HttpClient,
              private snack: MatSnackBar) {}

  getArr(endPoint: string): Observable<Products[]> {
    return this.http.get<Products[]>(this.url + endPoint)
  }

  postItem(endPoint: string, data: any) {

    this.http.post(`${this.url}${endPoint}`, data).subscribe(
      (response) => {
        console.log('Ordem enviada com sucesso.', response);
        this.snack.open('Produto adicionado', 'Fechar')
      },
      (error) => {
        console.error('Erro ao enviar a ordem.', error);
        this.snack.open('Produto não adicionado', 'Fechar')
      }
    )

  }


}
