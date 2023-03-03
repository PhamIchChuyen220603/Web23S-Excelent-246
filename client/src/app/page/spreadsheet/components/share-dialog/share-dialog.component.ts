import { AuthActions } from 'src/ngrx/actions/auth.actions';
import { Observable } from 'rxjs';
import { AuthState } from 'src/ngrx/states/auth.states';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss']
})
export class ShareDialogComponent {
  users$!:Observable<AuthState>
  constructor( private store: Store<{ auth: AuthState}>) {
    this.users$ = this.store.select('auth');
    this.store.dispatch(AuthActions.getAllUsers());
    this.users$.subscribe((data)=>{
      console.log(data);
    })
  }
}
