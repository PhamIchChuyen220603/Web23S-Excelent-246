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
import { FileDialogComponent } from './components/file-dialog/file-dialog.component';
import { MiniFileDialogComponent } from './components/mini-file-dialog/mini-file-dialog.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaintainingComponent } from './components/maintaining/maintaining.component';
@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    TemplateComponent,
    NotificationComponent,
    FillterComponent,
    ContentComponent,
    RenameDialogComponent,
    FileDialogComponent,
    MiniFileDialogComponent,
    MaintainingComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule,
    InfiniteScrollModule,
  ],
})
export class HomeModule {}
