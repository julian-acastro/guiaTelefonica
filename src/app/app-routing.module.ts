import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FormNuevoComponent } from './form-nuevo/form-nuevo.component';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent,
    pathMatch: 'full'
  },
  {
    path: 'nuevo',
    component: FormNuevoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
