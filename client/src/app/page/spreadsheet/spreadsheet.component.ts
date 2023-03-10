import { FileActions } from 'src/ngrx/actions/file.actions';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Spreadsheet, BeforeOpenEventArgs, ActionEventArgs, Workbook, DataSourceChangedEventArgs, FindAllArgs, BeforeActionData, CollaborativeEditing, CollaborativeEditArgs,
} from '@syncfusion/ej2-angular-spreadsheet';
import { getApp } from 'firebase/app';
import { File } from 'src/app/model/file.model';
import { AuthService } from 'src/app/service/auth.service';
import { FileService } from 'src/app/service/file.service';
import { AuthState } from 'src/ngrx/states/auth.states';
import { InvitationState } from 'src/ngrx/states/invitation.state';
import { FileState } from 'src/ngrx/states/file.states';
import { ActivatedRoute } from '@angular/router';
import { EventArgs } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.scss'],
})
export class SpreadsheetComponent implements OnInit {
  @ViewChild('spreadsheet') spreadsheetObj!: Spreadsheet;
  data$!: Observable<any>;
  tempData:any[] = [];
  newData!:any;

  hide() {
    this.spreadsheetObj.hideFileMenuItems(['File'], true);
  }
  file!:File;
  auth$!: Observable<AuthState>
  file$!: Observable<FileState>
  id!: string;
  idParam!:string | null;
  evt!: any;
  constructor(
    protected FileService: FileService,
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
    this.store.dispatch(FileActions.getFileById({fileId: this.FileService.idParam!}));
    this.file$.subscribe((file) => {
      this.FileService.currentFile = file.file;
    })
  }
  ngOnInit(): void {
    this.joinRoom(this.FileService.idParam!);
  }

  ngOnChanges(): void {
    // console.log(this.tempData)
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
    // this.FileService.createFile(fileToUpLoad);
  }
  
  async open(){
    this.spreadsheetObj.openFromJson({
      file: this.file.data.jsonObject, 
    })
  }

  joinRoom(fileId: string){
    console.log('Already joined in ', fileId!);
    this.data$ = this.FileService.getDataByFileId(fileId!);
    this.data$.subscribe((data) => {
      this.tempData.push(data);
      console.log(this.tempData);
    })
  }


  sendData(fileId: string, event: any){
    console.log(event);
    let model = event as CollaborativeEditArgs;
    this.FileService.sendDataByFileId(fileId!, event.eventArgs);
    console.log(model.eventArgs.address);
    // console.log(event.eventArgs);
    this.spreadsheetObj.updateAction(model);
    // this.FileService.sendDataByFileId(fileId!, event.eventArgs)


  }

}
