import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { API_PATH } from 'src/environments/environment';
import { IProduct } from './interfaceProductsRes';

@Injectable({
  providedIn: 'root'
})
export class GetProdutosService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<IProduct[]>(`${API_PATH}products`).toPromise();
  }


}
