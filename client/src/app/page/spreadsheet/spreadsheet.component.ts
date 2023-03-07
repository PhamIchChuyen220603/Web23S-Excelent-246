import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Spreadsheet, BeforeOpenEventArgs, ActionEventArgs, Workbook,
} from '@syncfusion/ej2-angular-spreadsheet';
import { getApp } from 'firebase/app';
import { File } from 'src/app/model/file.model';
import { AuthService } from 'src/app/service/auth.service';
import { FileService } from 'src/app/service/file.service';
import { AuthState } from 'src/ngrx/states/auth.states';
import { InvitationState } from 'src/ngrx/states/invitation.state';
import { FileState } from 'src/ngrx/states/file.states';
import { ActivatedRoute } from '@angular/router';
import { FileActions } from 'src/ngrx/actions/file.actions';

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class SpreadsheetComponent implements OnInit {
  @ViewChild('spreadsheet') spreadsheetObj!: Spreadsheet;
  hide() {
    this.spreadsheetObj.hideFileMenuItems(['File'], true);
  }
  file!:File;
  auth$!: Observable<AuthState>
  file$!: Observable<FileState>
  id!: string;
  idParam!:string | null;
  constructor(
    private FileService: FileService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private store: Store<{ auth: AuthState, invite: InvitationState, file: FileState }>
  ) {
    this.auth$ = this.store.select('auth');
    this.auth$.subscribe((auth) => {
      this.id = auth.user?.userId || 'kh co user';
    });
    this.file$ = this.store.select('file');
    this.route.paramMap.subscribe(params => {
      this.FileService.idParam = params.get('id')!;
      console.log(this.FileService.idParam);
    });
    this.store.dispatch(FileActions.getFileById({ fileId: this.FileService.idParam! }));
    this.file$.subscribe((file) => {
      if(file!=null){
        this.file = file.file!;
        console.log(this.file)
      }
    })
  }
  ngOnInit(): void {
    
  }

  openUrl =
    'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open';
  saveUrl =
    'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save';

  firebaseApp = getApp();

  async upload() {
    let response!: any;
    await this.spreadsheetObj.saveAsJson().then((JsonFile) => {
      response = JsonFile;
    });
    let fileToUpLoad: File = {
      fileId: '5',
      title: 'test5',
      createdBy: 'Trung',
      createdDate: 123,
      modifiedBy: 'Truong',
      modifiedDate: 123,
      ownerId: this.id,
      data: response,
      status: "public",
      members: ['1AVuBiKftySNehyP0B4MkSAEYtB3'],
    }
    this.FileService.createFile(fileToUpLoad);
  }

  // async open() {
  //   let file = this.FileService.getFileById(this.idParam!);
  //   file.subscribe((data) => {
  //     console.log(data.data.jsonObject.Workbook);
  //     this.spreadsheetObj.openFromJson({
  //       file: data.data.jsonObject,
  //     });
  //   })
  // }

  //set Timeout
  

  async open(){
    this.spreadsheetObj.openFromJson({
      file: this.file.data.jsonObject, 
    })
  }
}
