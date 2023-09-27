import { AuthService } from './../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private _authService:AuthService , private _router:Router) { }

  isLoading:boolean= false
  apiError:string=''
  isInvalidForm:boolean = false
  ngOnInit(): void {
  }


  registerForm:FormGroup = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,8}$/)]),
    rePassword:new FormControl("",[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,8}$/)]),
    phone : new FormControl("",[Validators.required, Validators.pattern(/^(01)[0125]{1}[0-9]{8}$/)])
  })

  register(form:FormGroup){
    console.log(form)
    if(form.valid){
      this.isLoading= true;
      this._authService.register(form.value).subscribe({
        next:(data)=>{
         
          console.log(data);
          this.isLoading= false
          this._router.navigate(['/login'])
          
        },
        error:(err)=>{
          // console.log(err)

            if(err.error.message =='fail'){
              this.apiError= err.error.errors.msg;
              
            }
            else
            {
              this.apiError=err.error.message
            }
            this.isLoading= false
            
        } 
        
      })
    }
    else
    {
      this.isInvalidForm=true
    }
   
  }


}
