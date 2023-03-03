import { FileModel } from "./file.model";
export interface InvitationModel {
    from: string;
    to: string;
    isAccepted: boolean;
    file: string;
}