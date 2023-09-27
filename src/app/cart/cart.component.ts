import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { Cart } from './interfaces/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _cartService:CartService) {
    
   }  
  ngOnInit(): void {
    this.getUserCart()
  }

  cartItem:Cart = {} as Cart

  isLoading:Boolean = false
  getUserCart(){
    
    this.isLoading = true
    this._cartService.getUserCart().subscribe({
      next:(res)=>{
        console.log(res);
        this.cartItem = res
        // console.log(this.cartItem.data.products);
        this.isLoading = false
      },
      error:(err)=>{
        // console.log(err);
        this.isLoading=false
        
      }
    })
  }



  updateProductQuantity(id:string , count:number){

    this._cartService.updateProducrQuantity(id , count).subscribe(
      {
        next:(res)=> {
          this.cartItem = res
          console.log(res);
    
          
        }
        , error:(err)=>{
          console.log(err);
          

        }
      }
    )
    if(count < 1){
        this.removeCartItem(id)
    }
  }



  removeCartItem(id:string){
    this._cartService.removeCartItem(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.cartItem= res
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }




}
