import { Component } from '@angular/core';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-open-file-dialog',
  templateUrl: './open-file-dialog.component.html',
  styleUrls: ['./open-file-dialog.component.scss']
})
export class OpenFileDialogComponent {
  constructor(private fileService: FileService) { }

  getAllFile(){
    this.fileService.getAllFile().then((res) => {
      res.forEach((file) => {
        console.log(file.data());
      })});
    };
  }