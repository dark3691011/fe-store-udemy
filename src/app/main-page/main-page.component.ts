import { Component } from '@angular/core';
import data from '../../assets/data.json';
import { ItemShopComponent } from '../item-shop/item-shop.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-main-page',
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  imports: [ItemShopComponent, CommonModule],
})
export class MainPageComponent {
  itemShops!: Product[];
  ngOnInit(): void {
    this.itemShops = data;
  }
}
