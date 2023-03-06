import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TemplateComponent } from './components/template/template.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NotificationComponent } from './components/notification/notification.component';
import { FillterComponent } from './components/fillter/fillter.component';
import { ContentComponent } from './components/content/content.component';
import { RenameDialogComponent } from './components/rename-dialog/rename-dialog.component';
import{HomeMiniFileComponent} from './components/home-mini-file/home-mini-file.component'
@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    TemplateComponent,
    NotificationComponent,
    FillterComponent,
    ContentComponent,
    RenameDialogComponent,
    HomeMiniFileComponent
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule, SharedModule],
})
export class HomeModule {}
