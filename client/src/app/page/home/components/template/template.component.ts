import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/service/auth.service';
import { FileService } from 'src/app/service/file.service';
import { FileActions } from 'src/ngrx/actions/file.actions';
import { AuthState } from 'src/ngrx/states/auth.states';
import { FileState } from 'src/ngrx/states/file.states';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
  constructor(
    public auth: AuthService,

    private fileService: FileService,
    private store: Store<{ auth: AuthState; file: FileState }>,
    private router: Router
  ) {}

  templates = [
    { name: 'Empty' },
    { name: 'Monthly budget' },
    { name: 'Annual budget' },
    { name: 'To-do list' },
    { name: 'Investment tracker' },
    { name: 'Work schedule' },
  ];

  startNewFile() {
    this.router.navigate(['/spreadsheet']);
  }

  // createFile(){
  //   this.store.dispatch(FileActions.createFile({file: File}))
  // }
}
