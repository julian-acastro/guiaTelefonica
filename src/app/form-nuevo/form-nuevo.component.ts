import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { Contacto } from '../contact-list/contacto';
import { ContactServerService } from '../contact-server.service';

@Component({
  selector: 'app-form-nuevo',
  templateUrl: './form-nuevo.component.html',
  styleUrls: ['./form-nuevo.component.scss']
})
export class FormNuevoComponent implements OnInit {
  formData: Contacto={
    img: 'assets/img/perfil.jpg',
      nombre: '',
      direccion: '',
      celular: 0,
      empresa: false
  };
  constructor(private contactList: ContactServerService) {}

  ngOnInit(): void {
  }
  saveData(form:NgForm){
    this.formData.nombre= form.value.nombre;
    this.formData.direccion= form.value.direccion;
    this.formData.celular= form.value.telefono;

    this.contactList.addContacto(this.formData);
  }

}
