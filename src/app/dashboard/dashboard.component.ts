// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products:any[]:[];
  filteredProducts:any[]=[];
  constructor(private productService:ProductService, private router:Router){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products =>{
      this.products = products;
      this.filteredProducts=products;
    });
  }
  filterProducts(criteria: { price?: number; seller?: string; rating?: number }): void {
    this.filteredProducts = this.products.filter(product => {
      return (!criteria.price || product.price <= criteria.price) &&
             (!criteria.seller || product.seller === criteria.seller) &&
             (!criteria.rating || product.rating >= criteria.rating);
    });
  }
  searchProducts(query:string){
    if(query){
      this.filteredProducts=this.products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }else{
      this.filteredProducts=this.products;
    }
  }

  viewProductDetails(productId:number){
    this.router.navigate(['/product',productId]);
  

}}
