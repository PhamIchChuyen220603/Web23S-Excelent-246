import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Spreadsheet, BeforeOpenEventArgs,
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

  auth$!: Observable<AuthState>
  file$!: Observable<FileState>
  id!: string;
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
  }
  ngOnInit(): void {
    // subscribe to url params
    this.route.paramMap.subscribe(params => {
      let filedId = params.get('id');
      this.store.dispatch(FileActions.getFileById({ fileId: filedId! }));
    });
  }

  openUrl =
    'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open';
  saveUrl =
    'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save';

  firebaseApp = getApp();

  async upload(event: BeforeOpenEventArgs) {
    let response!: any;
    await this.spreadsheetObj.saveAsJson().then((JsonFile) => {
      response = JsonFile;
    });
    let fileToUpLoad: File = {
      fileId: '1',
      title: 'test',
      createdBy: 'Truong',
      createdDate: 123,
      modifiedBy: 'Truong',
      modifiedDate: 123,
      ownerId: this.id,
      data: response,
      status: "private",
      member: [],
    }
    this.FileService.createFile(fileToUpLoad);
  }

  async open(event: BeforeOpenEventArgs) {
    if (this.FileService.currentFile != null) {
      this.spreadsheetObj.openFromJson(this.FileService.currentFile.data);
    }
  }
}
