export interface Invitation{
    id: string,
    from: string;
    to: string;
    status: 'pending' | 'accepted' | 'rejected';
    file: any;
}