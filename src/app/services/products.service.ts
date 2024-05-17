import { Injectable } from '@angular/core';
import { Observable, map, of, switchMap } from 'rxjs';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
// import products from '../../assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = '/assets/data.json';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    // return of(products);
    return this.http.get<Product[]>(this.url);
  }

  getProductById(id: number): Observable<Product | any> {
    return this.http.get<Product[]>(this.url).pipe(
      map((products: any) => {
        const product = products?.find((e: any) => Number(e.id) === Number(id));
        return product;
      })
    );
  }
}
