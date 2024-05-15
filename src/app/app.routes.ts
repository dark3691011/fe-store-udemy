import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ItemShopComponent } from './item-shop/item-shop.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'detail/:id',
    component: ItemDetailsComponent,
  },
];
