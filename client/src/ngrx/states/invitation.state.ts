import { Invitation } from "src/app/model/invitation.model";

export interface InvitationState {
  invitation: Invitation | any;
  invitations: Invitation[] | any[];
  loading: boolean;
  inProcess: boolean;
  error: string;
}
