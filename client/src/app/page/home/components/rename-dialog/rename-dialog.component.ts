import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FileService } from 'src/app/service/file.service';
import { FileActions } from 'src/ngrx/actions/file.actions';
import { FileState } from 'src/ngrx/states/file.states';
import { File } from 'src/app/model/file.model';

@Component({
  selector: 'app-rename-dialog',
  templateUrl: './rename-dialog.component.html',
  styleUrls: ['./rename-dialog.component.scss'],
})
export class RenameDialogComponent {
  files$!: Observable<FileState>
  @ViewChild('inputId') input!: ElementRef
  idToUpdate = this.fileService.idToUpdate;
  file!: File
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
  let newName = this.input.nativeElement.value;
   console.log(newName)
    // file.title = newName;
    this.store.dispatch(FileActions.getFileById({fileId:this.idToUpdate}))
    this.files$.subscribe((data)=>{
      // if(data.loading == false){
        console.log(data.file)
        this.file = {...data.file!}
        this.file.title = newName
        console.log(this.file.title)
      // }
    })
    this.store.dispatch(FileActions.updateFile({fileId: this.idToUpdate, file: this.file}))
    this.dialogRef.close()
      
  }

}
