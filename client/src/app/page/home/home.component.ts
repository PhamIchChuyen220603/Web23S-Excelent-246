import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/service/auth.service';
import { FileService } from 'src/app/service/file.service';
import { AuthState } from 'src/ngrx/states/auth.states';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private fileService: FileService,
    private authService: AuthService,
    private store: Store<{ auth: AuthState }>
  ) {}

  file$ = this.fileService.getAllFiles();
}
