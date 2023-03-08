import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FileService } from 'src/app/service/file.service';
import { AuthState } from 'src/ngrx/states/auth.states';
import { FileState } from 'src/ngrx/states/file.states';

@Component({
  selector: 'app-view-mode',
  templateUrl: './view-mode.component.html',
  styleUrls: ['./view-mode.component.scss'],
})
export class ViewModeComponent {
  files$: Observable<FileState>;
  constructor(private route: Router,
    private fileService: FileService,
    private store: Store<{ auth: AuthState; file: FileState }>,){
      this.files$ = this.store.select('file');
    }
}
