import { Component } from '@angular/core';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-mini-file',
  templateUrl: './mini-file.component.html',
  styleUrls: ['./mini-file.component.scss']
})
export class MiniFileComponent {
  constructor(private fileService: FileService) { }

  getAllFile(){
    let tmp = this.fileService.getAllFile();
    console.log(tmp);
  }
}
