import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FileService } from 'src/app/service/file.service';
import { SharedModule } from 'src/app/shared/shared.module';
@Component({
  selector: 'app-open-file-dialog',
  templateUrl: './open-file-dialog.component.html',
  styleUrls: ['./open-file-dialog.component.scss'],
})
export class OpenFileDialogComponent {
  constructor(public dialogRef: MatDialogRef<OpenFileDialogComponent>) {}
  closeDialog() {
    this.dialogRef.close();
  }
}
