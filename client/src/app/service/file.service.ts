import { Injectable } from '@angular/core';
import { collection, doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { File } from '../model/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private fireStore: Firestore) {}

  db = collection(this.fireStore, 'excelFiles');

  async addFile(file: File){
    return await setDoc(doc(this.db,file.fileId), file);
  }

  async getSheet(id: string){
    return (await getDoc(doc(this.db, id))).data();
  }
}
