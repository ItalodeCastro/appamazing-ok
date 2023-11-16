import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getCategories(): any {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}



 getProduct(p_id: number): Observable<any> {
  
  const url = 'http://localhost:30030/products/get';
  const headers = new HttpHeaders().set('Content-Type', 'application/json');  
  const body = JSON.stringify({id: p_id});
  return this.http.post(url, body, {headers});

  }


 getProducts(): Observable<any> {
  const url = 'http://localhost:30030/products/getAll';
  const headers = new HttpHeaders();  
  return this.http.get<any>(url, {headers});

 }

 newProduct(product: any): void{
  const url = 'http://localhost:30030/products/add';
  const headers = new HttpHeaders().set('Content-Type', 'application/json');  
  const body = product; 
  this.http.post(url, body, {headers}).subscribe();
 }

  updateProduct(product: any): void{
    const url = 'http://localhost:30030/products/update';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');  
    const body = product; 
    this.http.put(url, body, {headers}).subscribe(); 
  }

  deleteProduct(p_id: number): void{
    const url = 'http://localhost:30030/products/delete';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');  
    const body = JSON.stringify({id: p_id});
    this.http.post(url, body, {headers}).subscribe(); 
  }
}