import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FileService } from 'src/app/service/file.service';
import { FileActions } from 'src/ngrx/actions/file.actions';
import { AuthState } from 'src/ngrx/states/auth.states';
import { FileState } from 'src/ngrx/states/file.states';
import { MatMenuModule } from '@angular/material/menu';
import { Route, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { RenameDialogComponent } from '../rename-dialog/rename-dialog.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent  implements OnInit{
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  optionChoices = [
    {
      name: 'Shared with me',
      value: 1,
    },
    {
      name: 'Owned by me',
      value: 0,
    },
  ];
  id!: string | undefined;
  userId!: string | null;
  files$: Observable<FileState>;
  auth$ = this.store.select('auth');
  constructor(
    private route: Router,
    private fileService: FileService,
    private store: Store<{ auth: AuthState; file: FileState }>,
    private dialog: MatDialog
  ) {
    this.auth$.subscribe((res) => {
      this.userId = res.user?.userId!;
    });
    this.files$ = this.store.select('file');
    this.store.dispatch(FileActions.getFilesByUserId({ userId: this.userId! }));
    this.files$.subscribe((res) => {
    });
  }

  ngOnInit() {
    // this.store.dispatch(FileActions.getFilesByMemberId({memberId: this.userId!}));
    this.store.dispatch(FileActions.getAllFiles());
  }

  selectFile(fileId: string) {
    this.route.navigate([`/spreadsheet/${fileId}`]);
  }


  canRename(ownerId: string) {
    if (ownerId == this.userId) return true;
    else return false;
  }

  // deleleFile(fileId: string) {
  //   // if(fileId == )c
  //   console.log(fileId);
  //   this.fileService.deleteFile(fileId);
  // }

  openDialog() {
    this.dialog.open(RenameDialogComponent);
  }

  getId(fileId: string) {
    this.fileService.idToUpdate = fileId;
    console.log(this.fileService.idToUpdate);
  }

  
}
