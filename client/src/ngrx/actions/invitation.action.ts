import { createAction, props } from "@ngrx/store";
import { Invitation } from "src/app/model/invitation.model";

export const InvitationActions = {



    sendInvitation: createAction('[Invitation] Send Invitation', props<{ invitation: Invitation }>()),
    sendInvitationSuccess: createAction('[Invitation] Send Invitation Success'),
    sendInvitationFailure: createAction('[Invitation] Send Invitation Failure', props<{ error: string }>()),

    getInvitations: createAction('[Invitation] Get Invitations',props<{ idReciever: string }>()),
    getInvitationSuccess: createAction('[Invitation] Get Invitations Success', props<{ invitations: Invitation[] }>()),
    getInvitationFailure: createAction('[Invitation] Get Invitations Failure', props<{ error: string }>()),

    acceptInvitation: createAction('[Invitation] Accept Invitation', props<{ idReciever: string, idFile: string, idInvitation: string}>()),
    acceptInvitationSuccess: createAction('[Invitation] Accept Invitation Success'),
    acceptInvitationFailure: createAction('[Invitation] Accept Invitation Failure', props<{ error: string }>()),

    rejectInvivation: createAction('[Invitation] Reject Invitation', props<{ idReciever: string, idFile: string, idInvitation: string}>()),
    rejectInvivationSuccess: createAction('[Invitation] Reject Invitation Success'),
    rejectInvivationFailure: createAction('[Invitation] Reject Invitation Failure', props<{ error: string }>()),

}