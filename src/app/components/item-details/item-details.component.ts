import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import {
  Subscriber,
  Subscription,
  SubscriptionLike,
  map,
  switchMap,
} from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css',
})
export class ItemDetailsComponent {
  product?: Product;
  quantity: number = 1;
  subscribeProduct!: SubscriptionLike;
  subscription!: Subscription;

  constructor(
    private readonly productsService: ProductsService,
    private route: ActivatedRoute,
    private readonly cartService: CartService
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
    this.subscription = pipeProduct.subscribe((data) => {
      this.product = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async addCart() {
    if (this.product?.id)
      await this.cartService.addCart({
        id: this.product?.id,
        amount: this.quantity,
      });
  }
}
