import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contact-list/contacto';
import { ContactServerService } from '../contact-server.service';

@Component({
  selector: 'app-contact-fav-list',
  templateUrl: './contact-fav-list.component.html',
  styleUrls: ['./contact-fav-list.component.scss']
})
export class ContactFavListComponent implements OnInit {
  favList: Contacto[] = [];
  constructor(private contacto:ContactServerService) {
    contacto.favList.subscribe( c => this.favList= c);
   }

  ngOnInit(): void {
  }
  addToFav(contacto: Contacto): void {
    this.contacto.addToFav(contacto);


  }

}
