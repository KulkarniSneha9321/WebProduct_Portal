// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  filterProducts(criteria: { price?: number; seller?: string; rating?: number }): void {
    this.filteredProducts = this.products.filter(product => {
      return (!criteria.price || product.price <= criteria.price) &&
             (!criteria.seller || product.seller === criteria.seller) &&
             (!criteria.rating || product.rating >= criteria.rating);
    });
  }

  onSearch(query: string): void {
    this.filteredProducts = this.products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
  }
}
