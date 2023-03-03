import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { FileService } from 'src/app/service/file.service';
import { AuthActions } from 'src/ngrx/actions/auth.actions';
import { FileActions } from 'src/ngrx/actions/file.actions';
import { AuthState } from 'src/ngrx/states/auth.states';
import { FileState } from 'src/ngrx/states/file.states';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  id!: string | undefined;
  userId!: string | null;
  files$: Observable<FileState>;
  auth$ = this.store.select('auth');
  constructor(
    private fileService: FileService,
    private store: Store<{ auth: AuthState; file: FileState }>
  ) {
    this.auth$.subscribe((res) => {
      this.userId = res.user?.userId!;
    });
    this.files$ = this.store.select('file');
    this.store.dispatch(FileActions.getFilesByUserId({ userId: this.userId! }));
    this.files$.subscribe((res) => {
      console.log(res);
    });
  }

  file$ = this.store.select('file');
  ngOnInit() {
    this.store.dispatch(FileActions.getAllFiles());
  }

  onChange(event: any) {
    if (event?.target.value == 0) {
      this.store.dispatch(
        FileActions.getFilesByUserId({ userId: this.userId! })
      );
      this.files$.subscribe((res) => {
        console.log(res);
      });
    } else {
      this.store.dispatch(FileActions.getAllFiles());
    }
  }

  optionChoices = [
    {
      name: 'Shared with me',
      value: 1,
    },
    {
      name: 'Owned by me',
      value: 0,
    },
  ];
}
