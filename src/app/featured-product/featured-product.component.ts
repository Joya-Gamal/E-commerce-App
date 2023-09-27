import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products.service';
import { Product } from '../core/interfaces/product';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent implements OnInit {

  constructor(private _productsService:ProductsService) {
   }



   allProducts: Product[]=[]
   term:string = ''
  ngOnInit(): void {
    this.getProducts()
  }

  isLoading:boolean= false

  getProducts(){
    this.isLoading= true
    this._productsService.getProducts().subscribe({
      next:(res)=>{
        this.allProducts= res.data
        // console.log(this.allProducts);
        this.isLoading= false
      }
    })
  }
}
