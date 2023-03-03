import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TemplateComponent } from './components/template/template.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    TemplateComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
