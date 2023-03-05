import { Injectable } from "@angular/core";
import { InviteService } from "src/app/service/invite.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { InvitationActions } from "../actions/invitation.action";
import { switchMap, from, map, catchError, of } from "rxjs";


@Injectable()

export class InvitationEffect {
    constructor(private inviteService: InviteService, private action: Actions) {}


    sendInvitation$ = createEffect(() => this.action.pipe(
        ofType(InvitationActions.sendInvitation),
        switchMap((action) => {
            return from(this.inviteService.send(action.invitation)).pipe(
                map((result:any) => {
                    return InvitationActions.sendInvitationSuccess()
                }),
                catchError((error) => {
                    return of(InvitationActions.sendInvitationFailure({error: error}))
                })
            )
        })
    ))

    getInvitations$ = createEffect(() => this.action.pipe(
        ofType(InvitationActions.getInvitations),
        switchMap((action) => {
            return from(this.inviteService.get(action.idReciever)).pipe(
                map((result:any) => {
                    return InvitationActions.getInvitationSuccess({invitations: result})
                }),
                catchError((error) => {
                    return of(InvitationActions.getInvitationFailure({error: error}))
                })
            )
        })
    ))

    acceptInvitation$ = createEffect(() => this.action.pipe(
        ofType(InvitationActions.acceptInvitation),
        switchMap((action) => {
            return from(this.inviteService.accept(action.idFile, action.idReciever, action.idInvitation)).pipe(
                map((invitations) => {
                    return InvitationActions.acceptInvitationSuccess();
                }),
                catchError((error) => {
                    return of(InvitationActions.acceptInvitationFailure({error: error}))
                })
            )
        })
    ))

    rejectInvitation$ = createEffect(() => this.action.pipe(
        ofType(InvitationActions.rejectInvitation),
        switchMap((action) => {
            return from(this.inviteService.reject(action.idInvitation)).pipe(
                map(() => {
                    return InvitationActions.rejectInvitationSuccess()
                }),
                catchError((error) => {
                    return of(InvitationActions.rejectInvitationFailure({error: error}))
                })
            )
        })
    ))
}