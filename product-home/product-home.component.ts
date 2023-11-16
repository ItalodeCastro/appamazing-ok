import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'; // Assuming you have a ProductService for products
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-home', // Updated selector
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})

export class ProductsHomeComponent implements OnInit {
  products: any = []; // Updated variable name

  constructor(private productService: ProductsService, private router: Router) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => { // Assuming you have a getProducts() method
      this.products = data;
      this.loadProducts();
    });
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  opendetailform(row: any) {
    this.router.navigate(['/product', row.id]); // Updated route
  }

  editProductDetail(product: any) {
    this.router.navigate(['/product/edit', product]); // Updated route
  }

  deleteProduct(product: any) {
    this.productService.deleteProduct(product); // Assuming you have a deleteProduct() method
    this.router.navigate(['/products']);
  }

  navigateToProductDetail(productId: number) {
    // Navegar para a página de detalhes do produto
    this.router.navigate(['/product', productId]);
  }




  displayedColumns = ['id', 'name', 'stock', 'price', 'active' , 'date_added', 'category', 'actions' ]; // Adjusted columns for products
}
