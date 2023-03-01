import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarOneComponent } from '../../components/navbar-one/navbar-one.component'


@NgModule({
  declarations: [NavbarOneComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarOneComponent
  ]
})
export class SharedModule { }
