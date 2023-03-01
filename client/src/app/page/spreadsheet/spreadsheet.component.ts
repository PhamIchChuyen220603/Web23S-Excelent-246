import { Component, ViewChild} from '@angular/core';
import { Spreadsheet } from '@syncfusion/ej2-angular-spreadsheet';
import { getApp } from 'firebase/app';
import { FileService } from 'src/app/service/file.service';
@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class SpreadsheetComponent {


  @ViewChild('spreadsheet') spreadsheetObj!: Spreadsheet;


  constructor(private FileService: FileService) { }
  openUrl = 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open';
  saveUrl = 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save';

  firebaseApp = getApp();

  async upload(){
    let response!: any;
    await this.spreadsheetObj.saveAsJson().then((JsonFile) => {
      response = JsonFile;
    });

  }

}
