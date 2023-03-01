import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, mergeMap, EMPTY } from 'rxjs';
import { AuthActions } from '../actions/auth.actions';
import { AuthService } from '../../app/service/auth.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private route: Router) { }
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(() => this.authService.loginGG()),
      map((user) => {
        return AuthActions.loginSuccess({ user: user });
        this.route.navigate(['/home']);

      }),
      catchError((error) => of(AuthActions.loginFailure({ error })))
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      switchMap(() => this.authService.logOut()),
      map(() => {
        // this.route.navigate(['/']);
        return AuthActions.logoutSuccess();
      }),
      catchError((error) => of(AuthActions.logoutFailure({ error })))
    )
  );
}
