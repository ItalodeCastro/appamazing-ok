// category.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './model/Category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
 
  constructor(private http: HttpClient) {}
  getCategories(): Observable<any> {
    const url = 'http://localhost:30030/categories/getAll';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, {headers});

  }

}