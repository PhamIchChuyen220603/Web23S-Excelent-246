import { AuthModel } from 'src/Models/auth.model';
import { Injectable } from '@nestjs/common';
import { FileModel } from '../../Models/file.model';
// import { File, FileDocument } from "src/schema/file.schema";

import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';

@Injectable({})
export class FileService {
  currentFile!: FileModel;
  db = getFirestore();
  docRef = this.db.collection('excelFiles');

  constructor() {}

  async getAll(): Promise<FileModel[] | null> {
    try {
      const snapshot = await this.docRef.get();
      const files = snapshot.docs.map((doc) => doc.data());
      return files as FileModel[];
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async create(creator: AuthModel,file: FileModel) {
    const res = await this.docRef.add({ ...file,
      fileId: Timestamp.now().toMillis().toString(),
      ownerId: creator.userId,
      createdBy: creator.userName,
      createdDate: Timestamp.now().toMillis(),
      modifiedBy: '',
      modifiedDate: Timestamp.now().toMillis(),
      status: "private",
    });
    }

  async update(id: string, file: FileModel): Promise<FileModel | any> {
    try {
      const fileRef = this.docRef.where('fileId', '==', id);
      await fileRef.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          doc.ref.update({ ...file });
        });
      });
    } catch (err) {
      console.log(err);
      return null;
    }
  }

    async getById(fileId: string): Promise<FileModel | null>{
        try{
            let file!:FileModel;
            const fileRef = this.docRef.where('fileId', '==', fileId)
            await fileRef.get().then(snapshot => {
                snapshot.forEach(doc => {
                    file = doc.data() as FileModel;
                })
            })
            return file as FileModel;
        }
        catch(err){
            console.log(err);
            return null;
        }
    }

    async deleteById(id:string){
        const fileRef = this.docRef.where('fileId', '==', id);
        await fileRef.get().then(snapshot => {
            snapshot.forEach(doc => {
                doc.ref.delete()
            })
        })
    }

    

    // async deleteById(fileId: string): Promise<boolean>{
    //     try{
    //         const fileRef = this.docRef.doc(fileId);
    //         await fileRef.delete();
    //         return true;
    //     }
    //     catch(err){
    //         console.log(err);
    //         return false;
    //     }
    // }

  async getByUserId(userId: string): Promise<FileModel[] | null> {
    try {
      const snapshot = await this.docRef.where('ownerId', '==', userId).get();
      const files = snapshot.docs.map((doc) => doc.data()) as FileModel[];
      return files;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

    async getByMemberId(memberId: string): Promise<FileModel[] | null>{
        try{
            const snapshot = await this.docRef.where('members', 'array-contains', memberId).get();
            const files = snapshot.docs.map(doc => doc.data()) as FileModel[];
            return files;
        }
        catch(err){
            console.log(err);
            return null;
        }
    }
}
