import { Component, Input, OnInit } from '@angular/core';
import { Contacto } from '../contact-list/contacto';
import { ContactServerService } from '../contact-server.service';

@Component({
  selector: 'app-btn-fav',
  templateUrl: './btn-fav.component.html',
  styleUrls: ['./btn-fav.component.scss']
})
export class BtnFavComponent implements OnInit {
  
  @Input()
  contacto!: Contacto;

  
  constructor(private contactList: ContactServerService) {
  }
  ngOnInit(): void {
  }
  addToFav(contacto: Contacto): void {
    this.contactList.addToFav(contacto);
  }
  exist(contacto: Contacto): boolean{
    const e=this.contactList.exist(contacto);
    return e;
  }
}
