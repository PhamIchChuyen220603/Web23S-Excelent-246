export interface InvitationModel {
    id: string | null;
    from: string;
    name: string;
    to: string;
    status: 'pending' | 'accepted' | 'rejected';
    fileId: string;
    fileName: string;
}