import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ProductsHomeComponent } from './product-home/product-home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ProductEditComponent } from './product-edit/product-edit.component';



const routes: Routes = [
 
  { path: 'contacts', component: ContactHomeComponent},
  { path: 'contact/new', component: ContactNewComponent},
  { path: 'contact/:id', component: ContactDetailComponent},
  { path: 'products', component: ProductsHomeComponent},
  { path: 'product/new', component: ProductNewComponent},
  { path: 'product/:id', component: ProductDetailsComponent},
  { path: 'contact/edit/:id', component: ContactEditComponent},
  { path: 'product/edit/:id', component: ProductEditComponent},
 

  
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
