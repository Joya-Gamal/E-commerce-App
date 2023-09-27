import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from '../core/interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private _productsService:ProductsService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  isLoading:boolean=false

  allCategories: Category[]=[]
  getCategories(){
    this.isLoading=true
    this._productsService.getCategories().subscribe({
      next:(res)=>{
        this.allCategories= res.data;
        // console.log(res);
        this.isLoading=false
        
      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    responsive: {
      0: {
        items: 8
      }
    },
    nav: true
  }
}
