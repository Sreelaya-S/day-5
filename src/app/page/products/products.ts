import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductCard } from "../../ui/product-card/product-card";
import { Api } from '../../api';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: any;
  constructor(private api:Api,private cdr: ChangeDetectorRef) { }
  ngOnInit(){
    this.api.getAllProducts().subscribe((res:any)=>{
      this.products = res;
      this.cdr.detectChanges()

    })
  }
}
