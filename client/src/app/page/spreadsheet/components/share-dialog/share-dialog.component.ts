import { AuthActions } from 'src/ngrx/actions/auth.actions';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState } from 'src/ngrx/states/auth.states';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../../../model/user.model'
@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss']
})
export class ShareDialogComponent {

  users$!: Observable<AuthState>
  filterItem: User[] = [];
  allItems: Array<User> = []
  constructor(private store: Store<{ auth: AuthState }>) {
    this.users$ = this.store.select('auth');
    this.store.dispatch(AuthActions.getAllUsers());
    this.users$.subscribe((data) => {
      if (data.users != null && data.users.length != 0) {
        this.allItems = data.users;
        this.filterItem = data.users;
      }
    })
  }
  //searchItemByKeyword
  searchItemByKeyword(event: any) {
    if (event.target.value.trim() == '') {
      this.filterItem = this.allItems;

      return;
    }
    else {
      this.filterItem = this.allItems!.filter((user: User) => {
        return user.email!.toLowerCase().includes(event.target.value.toLowerCase())
      })
    }
  }
}
