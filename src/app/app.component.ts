import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from '../services/product/product.service';
import { Observable } from 'rxjs';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'Mini_Catalogo_De_Productos';
  constructor(private productService:ProductService){}
  getNotificationProductList(){
    this.productService.productList$.subscribe((e) => {
      console.log("info data product list:");
      console.log(e);
    });
  }

  getNotificationProduct(){
    this.productService.product$.subscribe((e) => {
      console.log("info data product:");
      console.log(e); 
    })
  }

  ngOnInit(){}
}
