import { Component } from '@angular/core';
import data from '../../../assets/data.json';
import { ItemShopComponent } from '../item-shop/item-shop.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  imports: [ItemShopComponent, CommonModule],
})
export class MainPageComponent {
  constructor(
    private readonly productsService: ProductsService,
    private readonly cartService: CartService
  ) {}

  itemShops!: Product[];
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.itemShops = data;
    });
  }

  async addCart({ id, amount }: any) {
    await this.cartService.addCart({
      id,
      amount,
    });
  }
}
