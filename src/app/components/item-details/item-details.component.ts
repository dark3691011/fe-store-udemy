import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css',
})
export class ItemDetailsComponent {
  product?: Product;
  quantity?: number = 1;

  constructor(
    private readonly productsService: ProductsService,

    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const pipeProduct = this.route.params.pipe(
      switchMap((params: Params) => {
        const prodId = params['id'];
        return this.productsService.getProductById(prodId).pipe(
          map((data) => {
            return data;
          })
        );
      })
    );
    pipeProduct.subscribe((data) => {
      this.product = data;
    });
  }
}
