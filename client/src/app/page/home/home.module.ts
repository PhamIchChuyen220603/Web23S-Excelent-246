import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TemplateComponent } from './components/template/template.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './components/content/content.component';
import { FillterComponent } from './components/fillter/fillter.component';
import { OpenFileDialogComponent } from './components/open-file-dialog/open-file-dialog.component';
import { MiniFileComponent } from './components/mini-file/mini-file.component';
import { ViewModeComponent } from './components/view-mode/view-mode.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    TemplateComponent,
    ContentComponent,
    FillterComponent,
    OpenFileDialogComponent,
    MiniFileComponent,
    ViewModeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
})
export class HomeModule {}
