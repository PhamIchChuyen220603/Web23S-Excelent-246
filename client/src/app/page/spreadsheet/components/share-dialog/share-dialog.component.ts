import { AuthActions } from 'src/ngrx/actions/auth.actions';
import { Observable } from 'rxjs';
import { AuthState } from 'src/ngrx/states/auth.states';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../../../model/user.model'
import { InvitationState } from 'src/ngrx/states/invitation.state';
import { InvitationActions } from 'src/ngrx/actions/invitation.action';
@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss']
})
export class ShareDialogComponent {

  id!:string;
  users$!: Observable<AuthState>
  invites$!: Observable<InvitationState>
  filterItem: User[] = [];
  allItems: Array<User> = []
  constructor(private store: Store<{ auth: AuthState, invite: InvitationState }>) {
    this.users$ = this.store.select('auth');
    this.store.dispatch(AuthActions.getAllUsers());
    this.users$.subscribe((data) => {
      this.id = data.user?.userId ?? ''
      if (data.users != null && data.users.length != 0) {
        this.allItems = data.users;
        this.filterItem = data.users;
      }

    })
    //test get invites
    this.invites$ = this.store.select('invite');
    this.store.dispatch(InvitationActions.getInvitations({idReciever: this.id}));
    this.invites$.subscribe((data) => {
      console.log(data)
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
