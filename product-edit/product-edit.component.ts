import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: any;
  categories: any[] = [];

  constructor(private productService: ProductsService, private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe(data => {
      this.product = data;
    })

    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      
    });



  }

  updateProduct() {
    this.productService.updateProduct(this.product);
    this.navigateDetails();

       
  }
  
  

  cancelUpdate() {
    this.navigateDetails();
    
  }

  navigateDetails() {
    this.router.navigate(['/product', this.route.snapshot.params['id']]);
  
  }

}
