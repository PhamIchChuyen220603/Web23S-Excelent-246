import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-rename-dialog',
  templateUrl: './rename-dialog.component.html',
  styleUrls: ['./rename-dialog.component.scss'],
})
export class RenameDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RenameDialogComponent>,
    private fileService: FileService
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  submitRename() {
    console.log();
    this.dialogRef.close();
  }

  test() {
    let a = (document.getElementById('inputId') as HTMLInputElement).value;
    console.log(a);
    console.log(this.fileService.idToDelete);
  }
}
