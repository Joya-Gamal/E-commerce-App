import { AuthService } from './../core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean= false
  constructor(private _authService:AuthService) { 
  _authService.userData.subscribe({
    next:(data)=>{
      if(_authService.userData.getValue()){
        this.isLogin = true
      }
      else{
        this.isLogin= false
      }
    }
  })
  }

  ngOnInit(): void {
  }

  logOut(){
    this._authService.logOut()
  }

}
