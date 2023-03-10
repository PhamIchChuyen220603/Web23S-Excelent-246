import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FileService } from 'src/app/service/file.service';
import { FileActions } from 'src/ngrx/actions/file.actions';
import { FileState } from 'src/ngrx/states/file.states';
import { File } from 'src/app/model/file.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rename-dialog',
  templateUrl: './rename-dialog.component.html',
  styleUrls: ['./rename-dialog.component.scss'],
})
export class RenameDialogComponent implements OnInit {
  files$!: Observable<FileState>;
  @ViewChild('inputId') input!: ElementRef;
  idToUpdate = this.fileService.idToUpdate;
  file!: File;
  constructor(
    public dialogRef: MatDialogRef<RenameDialogComponent>,
    private fileService: FileService,
    private store: Store<{ file: FileState }>,
    private router: Router
  ) {
    this.files$ = this.store.select('file');
    this.files$.subscribe((data) => {
      data.loading == false;
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  submitRename() {
    console.log();
    this.dialogRef.close();
  }

  ngOnInit(): void {}

  test() {
    let newName = this.input.nativeElement.value;

    this.store.dispatch(FileActions.getFileById({ fileId: this.idToUpdate }));

    this.files$.subscribe((data) => {
      console.log(data.loading);

      if (data.loading == false) {
        this.file = { ...data.file! };
        this.file.title = newName;
        this.file.createdBy = data.file?.createdBy!;
        this.file.createdDate = data.file?.createdDate!;
      }
    });
    console.log(this.file);

    this.store.dispatch(
      FileActions.updateFile({
        fileId: this.idToUpdate,
        file: {
          ...this.file,
          title: newName,
          createdBy: this.file.createdBy,
          createdDate: this.file.createdDate,
        },
      })
    );

    this.dialogRef.close();
  }
}
