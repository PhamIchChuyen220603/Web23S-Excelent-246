import { MatDialog } from '@angular/material/dialog';
import { InvitationActions } from './../../../../../ngrx/actions/invitation.action';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/service/auth.service';
import { AuthActions } from 'src/ngrx/actions/auth.actions';
import { AuthState } from 'src/ngrx/states/auth.states';
import { InvitationState } from 'src/ngrx/states/invitation.state';
import { NotificationComponent } from '../notification/notification.component';
import { InviteService } from 'src/app/service/invite.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit{
  userId!: string;
  auth$ = this.store.select('auth');
  invites$!: Observable<InvitationState>
  // inviteCount!:number;
  constructor(
    public auth: AuthService,
    protected inviteService: InviteService,
    private store: Store<{ auth: AuthState, invite: InvitationState }>,
    private dialog: MatDialog
  ) {
    this.auth$.subscribe((auth) => {
      this.userId = auth.user?.userId ?? '';
      console.log(auth.user);
    })

    this.invites$ = this.store.select('invite');
    this.store.dispatch(InvitationActions.getInvitations({idReciever: this.userId}));
  }

  open(){
    this.dialog.open(NotificationComponent)
  }

  ngOnInit(){
  }
}
