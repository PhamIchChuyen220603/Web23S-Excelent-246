import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  @ViewChild('spreadsheet') spreadSheetObj!: SpreadsheetComponent;

  constructor() { 
    // this.spreadSheetObj.
  }
}
