export interface InvitationModel {
    id: string | null;
    from: string;
    name: string;
    to: string;
    status: string;
    fileId: string;
    fileName: string;
}