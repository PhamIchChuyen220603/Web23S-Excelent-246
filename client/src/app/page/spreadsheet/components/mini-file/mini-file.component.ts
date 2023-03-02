import { Component } from '@angular/core';
import { File } from 'src/app/model/file.model';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-mini-file',
  templateUrl: './mini-file.component.html',
  styleUrls: ['./mini-file.component.scss']
})
export class MiniFileComponent {
  file!: File;
  data:any[] = [];
  constructor(private fileService: FileService) {
    this.fileService.getAllFile().then((res) => {
      res.forEach((file) => {
        this.data.push(file.data());
      })});
  }

  async getFileById(file: File){
    await this.fileService.getFileById(file.fileId);
    this.file = this.fileService.currentFile;
    console.log(this.file.data().fileId);
    // console.log(this.fileService.currentFile.data());
  }
}
