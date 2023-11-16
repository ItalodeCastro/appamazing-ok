import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelect, MatSelectModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ProductsHomeComponent } from './product-home/product-home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ProductEditComponent } from './product-edit/product-edit.component';






@NgModule({
  declarations: [
    AppComponent,
    ContactHomeComponent,
    ContactDetailComponent,
    ProductsHomeComponent,
    ProductDetailsComponent,
    ContactNewComponent,
    CategoryComponent,
    ProductNewComponent,
    ContactEditComponent,
    ProductEditComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    
    
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
