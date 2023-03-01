import { Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { File } from '../model/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private fireStore: Firestore) {}

  db = collection(this.fireStore, 'excelFiles');

  async createFile(file: File){
    return await setDoc(doc(this.db), file);
  }

  async updateFile(file: File){
    let tmp = Date.now();
    console.log(file);
    return await addDoc(this.db,file);
  }

  async getSheet(id: string){
    console.log(id);
    return (await getDoc(doc(this.db, id))).data();
  }
}
