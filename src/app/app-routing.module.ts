import { SettingModule } from './setting/setting.module';
import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrandComponent } from './brand/brand.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoriesComponent } from './categories/categories.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignAuthGuard } from './core/guards/sign-auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllordersComponent } from './allorders/allorders.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:'full'},
  {path:"home", canActivate:[AuthGuard], component:HomeComponent},
  {path:"about",canActivate:[AuthGuard], component:AboutComponent},
  {path:"brand",canActivate:[AuthGuard], component:BrandComponent},
  {path:"products",canActivate:[AuthGuard], component:ProductsComponent},
  {path:"productDetails/:id",canActivate:[AuthGuard], component:ProductDetailsComponent},
  {path:"categories",canActivate:[AuthGuard],component:CategoriesComponent },
  {path:"signup",canActivate:[SignAuthGuard], component: SignUpComponent},
  {path:"login",canActivate:[SignAuthGuard], component:SignInComponent},
  {path: "checkout/:cartId",canActivate:[AuthGuard], component: CheckoutComponent},
  {path: "allorders",canActivate:[AuthGuard], component: AllordersComponent},
  {path:'setting', loadChildren: ()=> import('./setting/setting.module').then(m=> m.SettingModule)},
  {path:'cart', loadChildren:()=> import('./cart/cart.module').then(m=> m.CartModule)},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
