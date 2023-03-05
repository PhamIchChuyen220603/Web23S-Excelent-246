import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TemplateComponent } from './components/template/template.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NotificationComponent } from './components/notification/notification.component';
@NgModule({
  declarations: [HomeComponent, NavbarComponent, TemplateComponent, NotificationComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, SharedModule],
})
export class HomeModule { }
