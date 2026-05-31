import { Component } from '@angular/core';
import { ListProductComponent } from '../list-product/list-product.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ListProductComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {

}
