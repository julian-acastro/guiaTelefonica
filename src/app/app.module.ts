import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FormNuevoComponent } from './form-nuevo/form-nuevo.component';
import { ContactFavListComponent } from './contact-fav-list/contact-fav-list.component';
import { BtnFavComponent } from './btn-fav/btn-fav.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    FormNuevoComponent,
    ContactFavListComponent,
    BtnFavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
