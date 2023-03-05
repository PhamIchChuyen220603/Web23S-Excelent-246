import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FileService } from 'src/app/service/file.service';
import { FileActions } from 'src/ngrx/actions/file.actions';
import { AuthState } from 'src/ngrx/states/auth.states';
import { FileState } from 'src/ngrx/states/file.states';
import { OpenFileDialogComponent } from '../open-file-dialog/open-file-dialog.component';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-fillter',
  templateUrl: './fillter.component.html',
  styleUrls: ['./fillter.component.scss'],
})
export class FillterComponent {
  id!: string | undefined;
  userId!: string | null;
  files$: Observable<FileState>;
  auth$ = this.store.select('auth');
  constructor(
    private fileService: FileService,
    private store: Store<{ auth: AuthState; file: FileState }>,
    private dailog: MatDialog
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

  openFile() {
    this.dailog.open(OpenFileDialogComponent);
  }
}
