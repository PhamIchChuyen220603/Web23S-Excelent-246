import { FileModel } from "./file.model";
export interface InvitationModel {
    id: string | null;
    from: string;
    to: string;
    isAccepted: boolean;
    file: string;
}