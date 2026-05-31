import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../models/product/product';
import { ComponentsModule } from "../components.module";
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-detalle-product',
  standalone: true,
  imports: [ProductComponent, MatDialogModule],
  templateUrl: './detalle-product.component.html',
  styleUrl: './detalle-product.component.scss'
})
export class DetalleProductComponent {

  @Input() productInfo!: Product;

  constructor(
    @Inject(MAT_DIALOG_DATA) public product:Product,
    private dialogRef:MatDialogRef<DetalleProductComponent>
  ){
    this.productInfo = product;
  }
  cerrar(){
    this.dialogRef.close();
  }
}
