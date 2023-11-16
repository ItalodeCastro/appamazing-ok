import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { CategoryService } from '../category.service';
import { Product } from '../model/Product';
import { Category } from '../model/Category';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  product: Product = new Product();
  categories: Category[] = [];
  category: Category = new Category();

  constructor(
    private router: Router,
    private productService: ProductsService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      
    });
  }

  newProduct() {
    this.product.active = this.product.stock > 0;

    

    const newProduct = {
      name: this.product.name,
      stock: this.product.stock,
      price: this.product.price,
      active: this.product.active,
      date_added: this.product.date_added,
      category: this.category
    };
  
    this.productService.newProduct(newProduct);
    this.navigateToHome();
  }

  cancelInsert() {
    this.navigateToHome();
  }

  navigateToHome() {
    this.router.navigate(['/products']);
  }
}
