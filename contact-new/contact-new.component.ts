import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { ContactEditComponent } from '../contact-edit/contact-edit.component';



@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})

export class ContactNewComponent implements OnInit {
  
  name: string= '';
  email: string= '';
  phone_Number: string= '';
  surname_1: string= '';
  surname_2: string= ''; 
  

 


  constructor(private router: Router, private contactService: ContactsService) { }

  ngOnInit() {
  }

  newContact() {
    const contact = {
      name: this.name,
      email: this.email,
      phone_Number: this.phone_Number,
      surname_1: this.surname_1,
      surname_2: this.surname_2,
      
    }
    this.contactService.newContact(contact);
    this.navigateToHome();
  }
  cancelInsert() {
    this.navigateToHome();
  }

  navigateToHome() {
    this.router.navigate(['/contacts']);
  }
}

