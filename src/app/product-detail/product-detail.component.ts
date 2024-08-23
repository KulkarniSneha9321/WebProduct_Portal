import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  product:any={};
  newReview: string='';
  constructor(private route:ActivatedRoute, private productService:ProductService){}
  ngOnInit(): void {
    const productId =+this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(productId).subscribe(product =>{
      this.product = product;
    });
  }
  addReview(){
    if(this.newReview.trim()){
      this.product.reviews.push(this.newReview);
      this.newReview = '';
      this.productService.updateProduct(this.product).subscribe(updatedProduct =>{
        console.log('Review Added to the product',updatedProduct);
      });
    }
  }

}
