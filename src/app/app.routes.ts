import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'detail/:id',
    component: ItemDetailsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
