import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/service/auth.service';
import { FileService } from 'src/app/service/file.service';
import { FileActions } from 'src/ngrx/actions/file.actions';
import { AuthState } from 'src/ngrx/states/auth.states';
import { FileState } from 'src/ngrx/states/file.states';
import { User } from 'src/app/model/user.model';
import {File} from 'src/app/model/file.model'
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
  currentUser!: User;
  user$!:Observable<AuthState>;
  file$!: Observable<FileState>;
  constructor(
    public auth: AuthService,

    protected fileService: FileService,
    private store: Store<{ auth: AuthState; file: FileState }>,
    private router: Router
  ) {
    this.user$ = this.store.select('auth');
    this.user$.subscribe((user) => {
      if(user.loading == false){
        this.currentUser = user.user!;
      }
    });
    
    this.file$ = this.store.select('file');
  }

  templates = [
    { name: 'Empty' },
    { name: 'Monthly budget' },
    { name: 'Annual budget' },
    { name: 'To-do list' },
    { name: 'Investment tracker' },
    { name: 'Work schedule' },
  ];

  startNewFile() {
    let fileToCreate: File = {
      fileId: Timestamp.now().toMillis().toString(),
      ownerId: this.currentUser.userId!,
      title: "Untitled",
      createdDate: Timestamp.now().toMillis(),
      modifiedDate: Timestamp.now().toMillis(),
      modifiedBy: '',
      createdBy: this.currentUser.userName!,
      status: "private",
      data: {},
      members:[],
  };
    this.fileService.currentFile = fileToCreate;
    this.store.dispatch(FileActions.createFile({ file: fileToCreate }));
    this.store.dispatch(FileActions.createFileSuccess({ file: this.fileService.currentFile }));
    this.router.navigate(['/spreadsheet', this.fileService.currentFile.fileId]);
  }
}
