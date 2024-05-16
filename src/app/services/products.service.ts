import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../models/product.model';
import products from '../../assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = products.find((e) => Number(e.id) === Number(id));
    return of(product);
  }
}
