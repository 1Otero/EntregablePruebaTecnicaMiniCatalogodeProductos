import { Routes } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { ListProductComponent } from "./list-product/list-product.component";
import { CatalogoComponent } from "./catalogo/catalogo.component";

export const routes:Routes=[{
   path: 'product',
   component: ProductComponent   
},{
    path: 'list-product',
    component: ListProductComponent
},{
    path: 'catalogo',
    component: CatalogoComponent
}]
