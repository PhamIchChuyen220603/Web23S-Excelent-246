import { Component } from '@angular/core';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-mini-file',
  templateUrl: './mini-file.component.html',
  styleUrls: ['./mini-file.component.scss']
})
export class MiniFileComponent {
  createdDate = 123;
  data:any[] = [];
  constructor(private fileService: FileService) {
    this.fileService.getAllFile().then((res) => {
      res.forEach((file) => {
        this.data.push(file.data());
      })});
  }

  getAllFile(){
    console.log(this.data);
  }
}
