import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';


  


@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css']
})

export class ContactHomeComponent implements OnInit{
  contacts: any = [];

  constructor(private contactsService: ContactsService, private router: Router) {
  }

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(data =>{
      this.contacts = data;
    });
  }

  opendetailform(row: any){
    this.router.navigate(['/contact', row.id]);
  }

  editContactDetail(contact: any){
    this.router.navigate(['/contact/edit', contact]);
   
  }

  deleteContact(contact: any){
    this.contactsService.deleteContact(contact);
    this.router.navigate(['/contacts']);
  }

    
  displayedColumns = ['id', 'name', 'surname1', 'surname2', 'phone', 'email', 'actions'];

}

