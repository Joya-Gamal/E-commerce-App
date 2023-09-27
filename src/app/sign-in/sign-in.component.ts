
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { endWith } from 'rxjs';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  isInValid:boolean=false
  isLoading:boolean= false
  apiError:string=''

  loginForm:FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("",[Validators.required])
  })

  login(form:FormGroup){

    if(form.valid){
      this.isLoading= true
      this._AuthService.login(form.value).subscribe({
        next:(data)=>{
          console.log(data);
          this.isLoading=false
          localStorage.setItem('userToken', data.token)
          this._AuthService.getUserData();
          this._router.navigate(['/home']) 
        },
        error:(err)=>{
          console.log(err);
          this.isLoading=false
          this.apiError= err.error.message
        }
      })
    }
    else
    {
      this.isInValid=true
    }
  }

}
