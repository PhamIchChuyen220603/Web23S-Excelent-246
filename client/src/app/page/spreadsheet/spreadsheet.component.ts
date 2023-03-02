import { Component, OnInit, ViewChild} from '@angular/core';
import { Store } from '@ngrx/store';
import { Spreadsheet, BeforeOpenEventArgs } from '@syncfusion/ej2-angular-spreadsheet';
import { getApp } from 'firebase/app';
import { File } from 'src/app/model/file.model';
import { AuthService } from 'src/app/service/auth.service';
import { FileService } from 'src/app/service/file.service';
import { AuthState } from 'src/ngrx/states/auth.states';


@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class SpreadsheetComponent implements OnInit{

  @ViewChild('spreadsheet') spreadsheetObj!: Spreadsheet;

  hide(){
    this.spreadsheetObj.hideFileMenuItems(['File'],true);
  }

  auth$ = this.store.select('auth');
  id!: string;
  constructor(private FileService: FileService, private authService: AuthService, private store: Store<{ auth: AuthState }>) {
    this.auth$.subscribe((auth) => {
      this.id = auth.user?.userId || "kh co user";
    });
  }
  ngOnInit(): void {
  }

  openUrl = 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open';
  saveUrl = 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save';

  firebaseApp = getApp();



  async upload(event: BeforeOpenEventArgs){
    let response!: any;
    await this.spreadsheetObj.saveAsJson().then((JsonFile) => {
      response = JsonFile;
    });
    let fileToUpLoad:File = {
      fileId: "1",
      title: "test",
      createdBy:"Quân",
      createdDate: 123,
      modifiedBy: "Quân",
      modifiedDate: 123,
      ownerId: this.id,
      data: null,
      status: "private"
    }  
    this.FileService.createFile(fileToUpLoad);    
  }
}
