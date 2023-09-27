import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  token:string | null = localStorage.getItem('userToken')

  constructor(private _httpClient:HttpClient) { }

  addToCart(id:string): Observable<any>{
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/cart', 
    {productId: id},
    {headers:{token: `${this.token}`}})
  }

  getUserCart(): Observable<any>{
    return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/cart",{
      headers:{token: `${this.token}`}
    })
  }

  updateProducrQuantity(id:string, count:number):Observable<any>{
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {count: count}
    , {headers:{token:`${this.token}`}})
  }

  removeCartItem(id:string):Observable<any>
  {
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`
    ,{headers:{token :`${this.token}`}})
  }

  checout(cartId:string, shippingAddress:any):Observable<any> {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
    {shippingAddress: shippingAddress},
    {headers:{token : `${this.token}`}}
   )  
  }



}
