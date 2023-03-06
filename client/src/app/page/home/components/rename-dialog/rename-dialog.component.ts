import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FileService } from 'src/app/service/file.service';
import { FileActions } from 'src/ngrx/actions/file.actions';
import { FileState } from 'src/ngrx/states/file.states';

@Component({
  selector: 'app-rename-dialog',
  templateUrl: './rename-dialog.component.html',
  styleUrls: ['./rename-dialog.component.scss'],
})
export class RenameDialogComponent {
  files$!: Observable<FileState>
  constructor(
    public dialogRef: MatDialogRef<RenameDialogComponent>,
    private fileService: FileService, private store: Store<{file: FileState}>
  ) {this.files$ =this.store.select('file')}

  closeDialog() {
    this.dialogRef.close();
  }

  submitRename() {
    console.log();
    this.dialogRef.close();
  }

  test() {
    let a = (document.getElementById('inputId') as HTMLInputElement).value;
   
    // this.fileService.getFileById(this.fileService.idToDelete)

    this.store.dispatch(FileActions.getFileById({fileId: this.fileService.idToUpdate}))
    this.files$.subscribe((res) => {console.log(res.file)})
  }

}
