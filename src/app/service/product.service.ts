import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly apiUrl = environment.apiUrl;


  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/assortment/all`);
  }

  getAllProductsBySearch(searchTerm:string){
    return this.getProducts().pipe(
      map(
        products => products.filter(product => product.productName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
      )
    );
  }

  getProductById(productId:string): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/assortment/find` + productId);
  }


}
