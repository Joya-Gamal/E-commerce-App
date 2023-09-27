import {  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: BehaviorSubject<any> = new BehaviorSubject('')
  getUserData(){
    let encoded = JSON.stringify(localStorage.getItem('userToken')) 
    let decodedData = jwtDecode(encoded)
    // console.log(decodedData);  
    this.userData.next(decodedData)
  }
  
  constructor(private _httpClient:HttpClient,private _router:Router) {
    if(localStorage.getItem('userToken')){
      this.getUserData()
    }
   }

  register(data:any):Observable<any>{
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, data)
  }

  login(data:any):Observable<any>{
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, data)
  }

  logOut(){
    localStorage.removeItem("userToken")
    this.userData.next(null)
    this._router.navigate(['/login'])
  }


}
