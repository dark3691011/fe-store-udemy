import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ItemShopComponent } from './components/item-shop/item-shop.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

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
