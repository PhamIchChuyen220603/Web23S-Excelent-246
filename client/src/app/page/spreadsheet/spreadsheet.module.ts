import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpreadsheetRoutingModule } from './spreadsheet-routing.module';
import { SpreadsheetComponent } from './spreadsheet.component';
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SheetComponent } from './components/sheet/sheet.component';
import { FileManagerModule } from '@syncfusion/ej2-angular-filemanager';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SpreadsheetComponent,
    NavbarComponent,
    SheetComponent
  ],
  imports: [
    CommonModule,
    SpreadsheetRoutingModule,
    SpreadsheetAllModule,
    FormsModule,
    FileManagerModule,
    SharedModule,
  ]
})
export class SpreadsheetModule { }
