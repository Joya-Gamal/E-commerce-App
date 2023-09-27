import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartId:string=''
  constructor(private _cartService:CartService, private _activatedRoute:ActivatedRoute) { 
    _activatedRoute.paramMap.subscribe({
      next:(res:any)=>{
        // console.log(res.params.cartId);
        this.cartId = res.params.cartId
        // this.cartId= res.params.
      }
    })
  }

  ngOnInit(): void {
  }

  shippingAddress:FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null)
  })


  handleShipping(){
   console.log(this.shippingAddress);   
    this._cartService.checout(this.cartId, this.shippingAddress.value).subscribe({
      next:(res)=>{

        if(res.status == 'success'){
          // console.log(res.session.url);
          window.location.href= res.session.url
        }
       
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
