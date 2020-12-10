import { ProductChangeFormComponent } from './components/product/product-change-form/product-change-form.component';
import { BuyComponent } from './views/buy/buy.component';
import { ProductModifyComponent } from './components/product/product-modify/product-modify.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component'
import { AdmComponent } from './views/adm/adm.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'buy',
    component: BuyComponent
  },
  {
    path: 'adm',
    component: AdmComponent,
  },
  {
    path: 'adm/create',
    component: ProductCreateComponent
  },
  {
    path: 'adm/modify',
    component: ProductModifyComponent
  },
  {
    path: 'adm/modify/change',
    component: ProductChangeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
