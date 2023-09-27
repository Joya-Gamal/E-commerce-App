import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../core/services/products.service';
import { Product } from '../core/interfaces/product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId:string= ''
  product:Product={} as Product
  isLoading:boolean= false
  constructor(private _activatedRoute:ActivatedRoute,
    private _productsService:ProductsService,
    private _cartService:CartService
    ) {

   }

   cartIsLoading:boolean = false
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((res:any)=>{
      this.productId=res.params.id
    })
    this.getProductById()
  }

  getProductById(){
    this.isLoading=true

    this._productsService.getProductById(this.productId).subscribe(
      {
        next:(res)=>{
          this.product= res.data;
          console.log(res.data);
          this.isLoading=false
          
        },
        error:(err)=> console.log(err)
        
      }
    );

  }

  addToCart(id:string){
     this.cartIsLoading= true
    this._cartService.addToCart(id).subscribe({
      next:(res)=>{

        console.log(res);
        this.cartIsLoading=false
        
      },
      error:(err)=>console.log(err)
      
    })

  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 70,
    navText: ['', ''],
    autoplay:true,
    // autoplayInterval:5000,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
  
}
