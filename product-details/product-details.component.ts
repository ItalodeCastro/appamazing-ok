import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;  

  constructor(private productService: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe(data => {
      this.product = data;
      this.loadProductDetails();
    })
    
  }

  opendetailform(row: any) {
    // Implement the logic to handle opening details form if needed
  }

  UpgradeProduct(product: any) {
    this.router.navigate(['/product/edit', this.route.snapshot.params['id']]);
  }

  navigateDetails() {
    this.router.navigate(['/products', this.route.snapshot.params['id']]);
  }

  closeProduct() {
    this.router.navigate(['/products']);
    
  }

  loadProductDetails() {
    const productId = this.route.snapshot.params['id'];
    this.productService.getProduct(productId).subscribe(data => {
      this.product = data;
    });
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product);
    this.router.navigate(['/products']);
  }
  

 
}
