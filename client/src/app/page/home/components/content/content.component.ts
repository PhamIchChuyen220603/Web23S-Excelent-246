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
  userId!: string | null;
  files$: Observable<FileState>;
  auth$ = this.store.select('auth');
  constructor(
    private route: Router,
    private fileService: FileService,
    private store: Store<{ auth: AuthState; file: FileState }>,
    private dialog: MatDialog
  ) {
    this.auth$ = this.store.select('auth')
    this.files$ = this.store.select('file');
    this.auth$.subscribe((res) => {
      if(res.loading == false){
        this.userId = res.user?.userId!;
        console.log(this.userId)
      }
    })
    this.store.dispatch(FileActions.getFilesByUserId({ userId: this.userId! }));
  }

  ngOnInit() {
    console.log(this.userId)
    this.store.dispatch(FileActions.getFilesByMemberId({memberId: this.userId!}));
  }


  selectFile(fileId: string) {
    this.route.navigate([`/spreadsheet/${fileId}`]);
  }


  canRename(ownerId: string) {
    if (ownerId == this.userId) return true;
    else return false;
  }

  deleleFile(fileId: string) {
   this.store.dispatch(FileActions.deleteFile({fileId: fileId}))
  }

  openDialog() {
    this.dialog.open(RenameDialogComponent);
  }

  getId(fileId: string) {
    this.fileService.idToUpdate = fileId;
    console.log(this.fileService.idToUpdate);
  }

  
}