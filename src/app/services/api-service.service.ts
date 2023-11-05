import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Products } from '../types/products.interface';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  readonly url: string = 'https://my-api-six-beta.vercel.app/'

  prodArr: Products[] = []


  constructor(private http: HttpClient) {}

  getArr(endPoint: string): Observable<Products[]> {
    return this.http.get<Products[]>(this.url + endPoint)
  }


}
