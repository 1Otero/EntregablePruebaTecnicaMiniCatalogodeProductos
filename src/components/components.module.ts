import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ListProductComponent } from './list-product/list-product.component';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './components.routes';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductComponent,
    CatalogoComponent,
    ListProductComponent,
    RouterModule.forChild(routes),
    ServicesModule
  ],
  exports: [
    ProductComponent,
    CatalogoComponent,
    ListProductComponent
  ]
})
export class ComponentsModule { }
