import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/service/auth.service';
import { AuthState } from 'src/ngrx/states/auth.states';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
  constructor(
    public auth: AuthService,
    private authState: Store<{ auth: AuthState }>
  ) {}
  auth$ = this.authState.select('auth');

  templates = [
    { name: 'Empty' },
    { name: 'Monthly budget' },
    { name: 'Annual budget' },
    { name: 'To-do list' },
    { name: 'Investment tracker' },
    { name: 'Work schedule' },
  ];
}
