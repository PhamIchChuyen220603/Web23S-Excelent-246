export interface Invitation{
    id: string,
    from: string;
    name: string;
    to: string;
    status: 'pending' | 'accepted' | 'rejected';
    fileId: string;
    fileName: string;
}