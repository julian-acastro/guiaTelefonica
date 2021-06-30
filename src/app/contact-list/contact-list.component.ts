import { Component, OnInit } from '@angular/core';
import { ContactServerService } from '../contact-server.service';
import { Contacto } from './contacto'
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contactos: Contacto[]=[];
  constructor(private contactList: ContactServerService) {
    contactList.contactos.subscribe(c => this.contactos= c)
  }


  ngOnInit(): void {
  }

  addToFav(contacto: Contacto): void {
    this.contactList.addToFav(contacto);


  }
}
