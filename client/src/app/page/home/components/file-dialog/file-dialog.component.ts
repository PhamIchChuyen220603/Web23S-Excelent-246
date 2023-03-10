import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-file-dialog',
  templateUrl: './file-dialog.component.html',
  styleUrls: ['./file-dialog.component.scss'],
})
export class FileDialogComponent {
  constructor(public dialogRef: MatDialogRef<FileDialogComponent>) {}
  closeDialog() {
    this.dialogRef.close();
  }
}
