import { createReducer, on } from "@ngrx/store";
import { InvitationActions } from "../actions/invitation.action";
import { InvitationState } from "../states/invitation.state";
import { Invitation } from "src/app/model/invitation.model";

const initialState: InvitationState = {
    invitation: null,
    invitations: [],
    loading: false,
    inProcess: false,
    error: '',
}

export const InvitationReducer = createReducer(
    initialState,
    on(InvitationActions.sendInvitation, (state, {invitation}) => {
        return {
            ...state,
            invitation: invitation,
            inProcess: true,
            loading: true,
            error: '',
        };
    }),

    on(InvitationActions.sendInvitationSuccess, (state) => {
        return {
            ...state,
            inProcess: false,
            loading: false,
            error: '',
        };
    }),

    on(InvitationActions.sendInvitationFailure, (state, { error }) => {
        return {
            ...state,
            inProcess: false,
            loading: false,
            error: error,
        };
    }),

    on(InvitationActions.getInvitations, (state,{idReciever}) => {
        return {
            ...state,
            inProcess: true,
            loading: true,
            error: '',
        };
    }),
    on(InvitationActions.getInvitationSuccess, (state, { invitations }) => {
        return {
            ...state,
            invitations: invitations,
            inProcess: false,
            loading: false,
            error: '',
        };
    }),

    on(InvitationActions.getInvitationFailure, (state, { error }) => {
        return {
            ...state,
            inProcess: false,
            loading: false,
            error: error,
        };
    }),

    on(InvitationActions.acceptInvitation, (state,) => {
        return {
            ...state,
            inProcess: true,
            loading: true,
            error: '',
        };
    }),

    on(InvitationActions.acceptInvitationSuccess, (state) => {
        return {
            ...state,
            inProcess: false,
            loading: false,
            error: '',
        };
    }),

    on(InvitationActions.acceptInvitationFailure, (state, { error }) => {
        return {
            ...state,
            inProcess: false,
            loading: false,
            error: error,
        };
    }),

    on(InvitationActions.rejectInvivation, (state,) => {
        return {
            ...state,
            inProcess: true,
            loading: true,
            error: '',
        };
    }),

    on(InvitationActions.rejectInvivationSuccess, (state) => {
        return {
            ...state,
            inProcess: false,
            loading: false,
            error: '',
        };
    }),

    on(InvitationActions.rejectInvivationFailure, (state, { error }) => {
        return {
            ...state,
            inProcess: false,
            loading: false,
            error:error,
        };
    })
)