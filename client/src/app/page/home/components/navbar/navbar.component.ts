import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/service/auth.service';
import { AuthActions } from 'src/ngrx/actions/auth.actions';
import { AuthState } from 'src/ngrx/states/auth.states';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    public auth: AuthService,
    private authState: Store<{ auth: AuthState }>
  ) {}
  auth$ = this.authState.select('auth');
}
