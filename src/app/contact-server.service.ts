import { Injectable } from '@angular/core';
import { ContactListComponent } from './contact-list/contact-list.component';
import { Contacto } from './contact-list/contacto';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServerService {

  private _favList: Contacto []=[];
  favList: BehaviorSubject<Contacto []>= new BehaviorSubject(this._favList);

  private _contactos: Contacto[] = [
    {
      img: '',
      nombre: 'oscar',
      direccion: 'peron 528',
      celular: 21212121212,
      empresa: false
    },
    {
      img: '',
      nombre: 'maria',
      direccion: 'letamendi 130',
      celular: 21212121212,
      empresa: true
    },
    {
      img: '',
      nombre: 'camila',
      direccion: 'alcina 45',
      celular: 21212121212,
      empresa: true
    },
    {
      img: '',
      nombre: 'jose',
      direccion: 'san martin 32',
      celular: 21212121212,
      empresa: false
    },
    {
      img: '',
      nombre: 'martin',
      direccion: 'belgrano 23',
      celular: 21212121212,
      empresa: true
    },
  ];
  contactos: BehaviorSubject<Contacto []>= new BehaviorSubject(this._contactos);

  ver: any;
  constructor() { }

  addContacto(contacto:Contacto){
    this._contactos.push(contacto);
    console.log('esto',this._contactos);

    this.contactos.next(this._contactos);
  }

  addToFav(contacto: Contacto) {
    this.ver = this._favList.find((v1)=> v1.nombre == contacto.nombre);
    console.log('ver', this.ver)
    if(!this.ver){
      this._favList.push(contacto);
    } else{
      this._favList.forEach((contacto,index) => {
        if(contacto == this.ver){
          this._favList.splice(index,1);
        }
      });
    }
    this.favList.next(this._favList);
  }
  exist(contacto: Contacto) :boolean{
    this.ver = this._favList.find((v1)=> v1.nombre == contacto.nombre);
    return this.ver;
  }

}