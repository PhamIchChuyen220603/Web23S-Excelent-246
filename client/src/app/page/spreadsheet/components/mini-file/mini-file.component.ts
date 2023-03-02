import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { File } from 'src/app/model/file.model';
import { FileService } from 'src/app/service/file.service';
import { AuthState } from 'src/ngrx/states/auth.states';
import { FileState } from 'src/ngrx/states/file.states';
import { FileActions } from 'src/ngrx/actions/file.actions';

@Component({
  selector: 'app-mini-file',
  templateUrl: './mini-file.component.html',
  styleUrls: ['./mini-file.component.scss']
})
export class MiniFileComponent {
  files$:Observable<FileState>;
  auth$ = this.store.select('auth');
  // file$ =
  constructor(private fileService: FileService, private store: Store<{auth:AuthState, file: FileState}>) {
    this.files$ = this.store.select('file');
    this.store.dispatch(FileActions.getAllFiles());
    this.files$.subscribe((res) => {
      console.log(res.files); 
    })
  }

  async getFileById(file: File){
    this.fileService.currentFile = file;
    console.log(this.fileService.currentFile?.data);
  }
}
