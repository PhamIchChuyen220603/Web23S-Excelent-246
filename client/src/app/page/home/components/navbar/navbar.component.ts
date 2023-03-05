import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private authState: Store<{ auth: AuthState }>,
    private router: Router
  ) {}
  auth$ = this.authState.select('auth');

  async navigateToLandingPage() {
    await this.router.navigate(['']);
  }
}
