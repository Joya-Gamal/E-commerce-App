import { CartService } from '../cart/services/cart.service';
import { Product } from './../core/interfaces/product';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private _cartService:CartService) { }

  @Input() product:Product = {} as Product
  ngOnInit(): void {
  }

  isLoading:boolean=false

  addToCart(id:string){
    
    this.isLoading=true

    this._cartService.addToCart(id).subscribe(
      {
        next:(res)=>{
          console.log(res);
          
          this.isLoading=false
        },
        error:(err)=>console.log(err)
        
        
      }
    )
  }
}
