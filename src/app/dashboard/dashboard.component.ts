// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products:any[]=[];
  filteredProducts:any[]=[];
  constructor(private productService:ProductService, private router:Router){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products =>{
      this.products = products;
      this.filteredProducts=products;
    });
  }
  onFilterChange(filter:any) {
    this.filteredProducts = this.products.filter(product => {
      return (!filter.price || product.price <= filter.price) &&
             (!filter.seller || product.seller === filter.seller) &&
             (!filter.rating || product.rating >= filter.rating);
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
