import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
   @Input() nameFilter:string = "";
   @Output() filterProduct:EventEmitter<string>= new EventEmitter<string>();
   sendNameFilter(event: Event){
    let elementoInput = event.target as HTMLInputElement;
    let nameProduct = elementoInput.value;
    //this.filterProduct.emit(this.nameFilter);
    this.filterProduct.emit(nameProduct);
   }
}
