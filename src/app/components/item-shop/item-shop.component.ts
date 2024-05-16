import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../models/product.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-item-shop',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './item-shop.component.html',
  styleUrl: './item-shop.component.css',
})
export class ItemShopComponent {
  @Input() product!: Product;
  quantity: number | undefined = 1;
}
