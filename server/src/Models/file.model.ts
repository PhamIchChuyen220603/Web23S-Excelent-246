export interface FileModel {
    fileId: string;
    ownerId: string,
    // name: string;
    title: string,
    createdDate: number;
    modifiedDate: number;
    modifiedBy: string;
    createdBy: string;
    data: any;
    status: 'private' | 'public';
    // size: number;
    // type: string;
}