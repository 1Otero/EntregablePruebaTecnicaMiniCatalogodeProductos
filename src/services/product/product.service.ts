import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //private behaviorSubject:BehaviorSubject<any>=new BehaviorSubject<any>(Object);
  private productListBehaviorSubject:BehaviorSubject<Product[]>=new BehaviorSubject<Product[]>([]);
  productList$:Observable<Product[]>=this.productListBehaviorSubject.asObservable();
  private productBehaviorSubject:BehaviorSubject<Product>=new BehaviorSubject<Product>({id: 0, category: 'lol', description: '', image: '', price: 0, rating: {rate: 1, count: 1}, title: ''});
  product$:Observable<Product> = this.productBehaviorSubject.asObservable();

  constructor(private httpClient:HttpClient){ }

  getListProducts():void{
    console.log("find product list: ")
    let listProducts = this.httpClient
    .get<Product[]>("https://fakestoreapi.com/products")
    .subscribe((e) => {
      console.log("Data: ");
      console.log(e);
      //this.productBehaviorSubject.next(e);
      this.productListBehaviorSubject.next(e)
    });
    console.log(listProducts);
  }

  getProductById(productId: Number):void{
    console.log("find product: " + productId.toString())
    let product = this.httpClient
    .get<Product>("https://fakestoreapi.com/products/" + productId.toString())
    .subscribe((e) => {
      console.log("Data: ");
      console.log(e);
      this.productBehaviorSubject.next(e);
    });
    console.log(product);
  }
}
