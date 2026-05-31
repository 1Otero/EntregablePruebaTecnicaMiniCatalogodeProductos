import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product/product';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  
  @Input() product!:Product;

  constructor(private productService:ProductService){}

  getProduct(idProduct:Number){
    this.productService.getProductById(idProduct);
  }

  getProductList(){
    this.productService.getListProducts();
  }

  fillData(){
    console.log("clicking!...")
    this.productService.product$.subscribe((e) => {
      console.log("info after clicked");
      this.product = e;
    })
  }
}
