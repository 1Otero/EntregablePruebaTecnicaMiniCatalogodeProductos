import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { CommonModule } from "@angular/common";
import { Product } from '../../models/product/product';
import { ProductComponent } from '../product/product.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FilterComponent } from "../filter/filter.component";
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { DetalleProductComponent } from '../detalle-product/detalle-product.component';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule, ProductComponent, MatCardModule, MatGridListModule, FilterComponent, MatDialogModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss'
})
export class ListProductComponent implements OnInit{

  @Input() productList!: Product[]; 
  @Input() listProductCache!: Product[];

  private dialog = inject(MatDialog);

  constructor(private productService:ProductService){}

  ngOnInit(){
    this.getProductList();
    this.productService.getListProducts();
  }
  getProductList(){
    this.productService.productList$.subscribe((l) => {
      console.log("List products: ");
      console.log(l);
      this.productList = l;
      this.listProductCache = l;
    })
  }

  getFilterProduct(productName:string){
  //getFilterProduct(event: Event){
      var valideProductName = productName.trim()
      console.log("name product: ");
      console.log(productName);
      //let valideProductName = 
      if(valideProductName.length == 0){
        this.productList = this.listProductCache;
        return;
      }
      let products = this.listProductCache.filter((p) => {
        return p.title.toLowerCase().startsWith(valideProductName.toLowerCase());
      })
      console.log("product: ");
      console.log(products);
      //this.productList.pop();
      if(products == null || products.length == 0){
        this.productList = [];  
      }
      this.productList = [];
      //this.productList.push(product[0]);
      this.productList= products;
  }

  modalOpen(product:Product){
    this.dialog.open(DetalleProductComponent, {
      width: "555px",
      disableClose: false,
      data: product,
      autoFocus: true,
      hasBackdrop: true
    })
  }
}
